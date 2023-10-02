import { env } from "@/env.mjs";
import { decode } from "@/lib/polyline";
import { type Feature, type LineString, type Position } from "@turf/turf";

const baseUrl = "https://api.mapbox.com/directions/v5/mapbox/driving";

function getAccessToken(isServerSide?: boolean) {
  return isServerSide ? env.SERVER_MAPBOX_TOKEN : env.NEXT_PUBLIC_MAPBOX_TOKEN;
}

function getRequestUrl(path: string, isServerSide?: boolean) {
  return `${baseUrl}/${path}?geometries=polyline&overview=full&access_token=${getAccessToken(
    isServerSide,
  )}`;
}

function generateChunks(coordinates: Position[], size: number) {
  const chunks = [];
  let index = 0;

  while (index < coordinates.length) {
    const startingIndex = index === 0 ? 0 : index - 1;
    chunks.push(coordinates.slice(startingIndex, size + startingIndex));
    index += size;
  }

  return chunks;
}

function generateRoute(
  routeChunks: {
    route: [number, number][];
    index: number;
  }[],
) {
  const filteredRouteChunks = routeChunks.filter((chunk) => chunk);
  const sortedRouteChunks = filteredRouteChunks.sort(
    (a, b) => a.index - b.index,
  );
  return sortedRouteChunks.reduce(
    (acc, chunk) => [...acc, ...chunk.route],
    [] as [number, number][],
  );
}

async function getRouteChunk(
  chunk: Position[],
  index: number,
  isServerSide?: boolean,
) {
  const coordinates = chunk.map((pin) => pin.join(",")).join(";");
  const url = getRequestUrl(coordinates, isServerSide);

  const query = await fetch(url, { method: "GET" });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const json = await query.json();

  // eslint-disable-next-line
  const route = decode(json?.routes?.[0]?.geometry);

  return {
    route: route.map((lngLat) => (lngLat as [number, number]).reverse()) as [
      number,
      number,
    ][],
    index,
  };
}

export async function getDirections(
  coordinates: Position[],
  {
    id,
    properties,
  }: { id?: string; properties?: Record<string, unknown> } = {},
  isServerSide = false,
) {
  try {
    const chunks = generateChunks(coordinates, 25);
    const promises = chunks.map((chunk, index) =>
      getRouteChunk(chunk, index, isServerSide),
    );
    const routeChunks = await Promise.all(promises);
    const route = generateRoute(routeChunks);

    return {
      id,
      type: "Feature",
      properties: { ...properties, id },
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    } as Feature<LineString>;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get directions");
  }
}
