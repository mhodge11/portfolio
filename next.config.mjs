import { dirname } from "path";
import { fileURLToPath } from "url";
// @ts-expect-error - no types
import nextBuildId from "next-build-id";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
