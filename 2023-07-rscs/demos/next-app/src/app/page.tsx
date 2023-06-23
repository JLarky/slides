"use client";

import React from "react";
import { HeavyComponent } from "~/ui/HeavyComponent";

export const dynamic = "force-dynamic";

const C = false ? HeavyComponent : React.Fragment;

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      <C />
    </div>
  );
}
