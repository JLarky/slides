import { jsxs } from "https://esm.sh/react@18.3.0-canary-3ff846d10-20230724/jsx-runtime?dev";
import React from "https://esm.sh/react@18.3.0-canary-3ff846d10-20230724?dev";

export const App = (props) => {
  const [name, setName] = React.useState("Hello");
  React.useEffect(() => {
    setTimeout(() => {
      setName("Hello World");
    }, 1000);
  }, []);
  return jsxs("div", { children: [name, props.children?.()] });
};
