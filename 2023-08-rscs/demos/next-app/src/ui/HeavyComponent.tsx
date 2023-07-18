"use client";

import * as b from "babylonjs";

const keys = Object.keys(b);

export function HeavyComponent() {
  return <div>This is pretty heavy! {keys.length}</div>;
}
