import { decode } from "@/lib/polyline";
import { getMapboxAccessToken } from "@/lib/utils";
import { type Feature, type LineString, type Position } from "@turf/turf";

const baseUrl = "https://api.mapbox.com/directions/v5/mapbox/driving";

function getRequestUrl(coordinates: Position[], isServerSide?: boolean) {
  const path = coordinates.map((coordinate) => coordinate.join(",")).join(";");
  return `${baseUrl}/${path}?geometries=polyline&overview=full&access_token=${getMapboxAccessToken(
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
  const url = getRequestUrl(chunk, isServerSide);

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
      type: "Feature",
      properties: {},
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
