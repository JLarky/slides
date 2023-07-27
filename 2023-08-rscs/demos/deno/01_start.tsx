#!/usr/bin/env -S deno run --watch --allow-read --allow-write --allow-net --allow-env --allow-run
import { renderToReadableStream } from "https://esm.sh/react-dom@18.3.0-canary-3ff846d10-20230724/server?dev";
import "https://esm.sh/react@18.3.0-canary-3ff846d10-20230724/jsx-runtime";
import { jsxs } from "https://esm.sh/react@18.3.0-canary-3ff846d10-20230724/jsx-runtime";
/** @jsxImportSource https://esm.sh/react@18.3.0-canary-3ff846d10-20230724 */
import React from "https://esm.sh/react@18.3.0-canary-3ff846d10-20230724?dev";

const App = (props: { children?: () => React.ReactNode }) => {
  const [name, setName] = React.useState("Hello");
  React.useEffect(() => {
    setTimeout(() => {
      setName("Hello World");
    }, 1000);
  }, []);
  return jsxs("div", { children: [name, props.children?.()] });
};

const rootNode = (
  <html lang="en">
    <head>
      <title>Title</title>
    </head>
    <body>
      <div id="root">
        <App>{() => "test"}</App>
      </div>
      <script type="module">console.log(123)</script>
    </body>
  </html>
);

Deno.serve(async (req) => {
  // thanks to https://medium.com/deno-the-complete-reference/node-js-vs-deno-vs-bun-server-side-rendering-performance-comparison-f80a5abc766f
  const headers = {
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "no-transform",
    },
  };
  return new Response(await renderToReadableStream(rootNode), headers);
});
