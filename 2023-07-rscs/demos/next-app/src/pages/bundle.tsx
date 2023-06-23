import "~/styles/globals.css";

import { HeavyComponent } from "~/ui/HeavyComponent";

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      {0 && <HeavyComponent />}
    </div>
  );
}
