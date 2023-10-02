/* eslint-disable */

import { type Position } from "@turf/turf";

const PRECISION = 1e5;

function decode(value: any) {
  const points: Position[] = [];
  let lat = 0;
  let lon = 0;

  const values = decode.integers(value, function (x: any, y: any) {
    lat += x;
    lon += y;
    points.push([lat / PRECISION, lon / PRECISION]);
  });

  return points;
}

decode.sign = function (value: any) {
  return value & 1 ? ~(value >>> 1) : value >>> 1;
};

decode.integers = function (value: any, callback: any) {
  let values = 0;
  let x = 0;
  let y = 0;

  let byte = 0;
  let current = 0;
  let bits = 0;

  for (let i = 0; i < value.length; i++) {
    byte = value.charCodeAt(i) - 63;
    current = current | ((byte & 0x1f) << bits);
    bits = bits + 5;

    if (byte < 0x20) {
      if (++values & 1) {
        x = decode.sign(current);
      } else {
        y = decode.sign(current);
        callback(x, y);
      }
      current = 0;
      bits = 0;
    }
  }

  return values;
};

export { decode };
