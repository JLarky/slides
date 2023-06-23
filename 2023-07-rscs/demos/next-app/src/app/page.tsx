"use client";

import { HeavyComponent } from "~/ui/HeavyComponent";

export const dynamic = "force-dynamic";

export default function Home() {
  if (0) {
    return <HeavyComponent />;
  }
  return (
    <div>
      <h1>Next.js</h1>
    </div>
  );
}
