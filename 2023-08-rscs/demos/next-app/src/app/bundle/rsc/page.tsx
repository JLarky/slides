import { HeavyComponent } from "~/ui/HeavyComponent";

export const dynamic = "force-dynamic";

export default function Home() {
  const doIt = Math.random() > 0.5;
  console.log("Home", doIt);
  return (
    <div>
      <h1>Next.js</h1>
      {doIt && <HeavyComponent />}
    </div>
  );
}
