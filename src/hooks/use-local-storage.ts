import {
  getLocalStorageItem,
  setLocalStorageItem,
  type Key,
} from "@/lib/local-storage";
import * as React from "react";

export function useLocalStorage(key: Key) {
  const [value, setValue] = React.useState(() => getLocalStorageItem(key));

  React.useEffect(() => {
    setLocalStorageItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
