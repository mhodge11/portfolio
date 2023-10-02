import { env } from "@/env.mjs";
import { type FeatureCollection, type Point } from "@turf/turf";

const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places";

function getAccessToken(isServerSide?: boolean) {
  return isServerSide ? env.SERVER_MAPBOX_TOKEN : env.NEXT_PUBLIC_MAPBOX_TOKEN;
}

function getRequestUrl(searchText: string, isServerSide?: boolean) {
  return `${baseUrl}/${encodeURIComponent(
    searchText,
  )}.json?country=US&limit=1&access_token=${getAccessToken(isServerSide)}`;
}

export async function geocode(searchText: string, isServerSide?: boolean) {
  try {
    const url = getRequestUrl(searchText, isServerSide);
    const query = await fetch(url, { method: "GET" });

    const json = (await query.json()) as FeatureCollection;
    const feature = json.features[0];

    if (!feature) throw new Error(`Address "${searchText}" not found`);

    return { data: feature.geometry as Point };
  } catch (e) {
    console.error("Error geocoding", e);
    if (e instanceof Error) return { error: e.message };
    return { error: `Error geocoding "${searchText}"` };
  }
}
