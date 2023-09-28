import packageJson from "../../package.json";

const { dependencies: deps, devDependencies: devDeps } = packageJson;

const allDeps = { ...deps, ...devDeps, "shadcn-ui": "latest" };

const filteredDeps = Object.keys(allDeps).filter(
  (dep) => !dep.startsWith("@types/"),
);

export const dependencies = filteredDeps.sort();
