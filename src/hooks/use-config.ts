import { type Style } from "@/config/styles";
import { type Theme } from "@/config/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Config {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
});

export const useConfig = () => useAtom(configAtom);
