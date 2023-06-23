"use client";

import { HeavyComponent } from "~/ui/HeavyComponent";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      {0 && <HeavyComponent />}
    </div>
  );
}
