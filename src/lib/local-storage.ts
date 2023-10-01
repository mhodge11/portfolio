"use client";

import superjson from "superjson";
import { z } from "zod";

const schema = z.object({});

type KeyValueMap = z.infer<typeof schema>;
export type Key = keyof KeyValueMap;
export type Value<K extends Key> = KeyValueMap[K];

export function getLocalStorageItem<K extends Key>(key: K): Value<K> {
  const parsed = schema.parse(localStorage);
  return parsed[key];
}

export function setLocalStorageItem<K extends Key>(
  key: K,
  value: Exclude<Value<K>, undefined>,
) {
  let val: string;

  if (typeof value !== "string") val = superjson.stringify(value);
  else val = value;

  localStorage.setItem(key, val);
}

// Runs JSON stringify on an object while parsing it from localStorage
// function objectSchema<T extends z.ZodRawShape>(schema: z.ZodObject<T>) {
//   return z.string().transform((arg) => {
//     const parsed = superjson.parse(arg);
//     return schema.parse(parsed);
//   });
// }

// Runs JSON stringify on an array while parsing it from localStorage
// function arraySchema<T extends z.ZodTypeAny>(schema: z.ZodArray<T>) {
//   return z.string().transform((arg) => {
//     const parsed = superjson.parse(arg);
//     return schema.parse(parsed);
//   });
// }
