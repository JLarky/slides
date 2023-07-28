import "./globals.css";
import type { Metadata } from "next";
import path from "path";
import { promises as fs } from "fs";
import { parse, walk, ELEMENT_NODE, render } from "ultrahtml";
import { Fragment, createElement } from "react";

const file = path.resolve(process.cwd(), "public/index.html");
// TODO: use cache, otherwise you need to restart dev server to see changes
const astPromise = fs.readFile(file, "utf-8").then((str) => {
  for (const key in process.env) {
    // replace all instances of that key with its value
    const value = process.env[key];
    if (value) {
      str = str.replace(new RegExp(`%${key}%`, "g"), value);
    }
  }
  if (!process.env.PUBLIC_URL) {
    const key = "PUBLIC_URL";
    const value = "";
    str = str.replace(new RegExp(`%${key}%`, "g"), value);
  }
  return parse(str);
});

// or Dynamic metadata
export async function generateMetadata() {
  const ast = await astPromise;
  let title = "";
  let description = "";
  await walk(ast, async (node) => {
    if (node.type === ELEMENT_NODE && node.name === "title") {
      title = await render(node.children[0]);
    }
    if (
      node.type === ELEMENT_NODE &&
      node.name === "meta" &&
      node.attributes.name === "description"
    ) {
      description = node.attributes.content;
    }
  });
  return {
    title,
    description,
  } satisfies Metadata;
}

function reactify(obj: Record<string, string>) {
  if ("charset" in obj) {
    const { charset, ...rest } = obj;
    return { ...rest, charSet: charset };
  }
  return obj;
}

export async function CRAComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const ast = await astPromise;
  // console.log(ast);
  // const __html = html
  //   .replace('<!DOCTYPE html>\n<html lang="en">', "")
  //   .replace("</html>", "");
  const heads: React.ReactNode[] = [];
  let body = "";
  await walk(ast, async (node) => {
    if (node.type === ELEMENT_NODE) {
      if (node.name === "head") {
        for (const child of node.children) {
          if (child.type === ELEMENT_NODE) {
            heads.push(createElement(child.name, reactify(child.attributes)));
          }
        }
      } else if (node.name === "body") {
        console.log(node);
        body = await render(node);
      }
    }
  });
  console.log(body);
  return (
    <html>
      <head>{heads}</head>
      <body>{children}</body>
    </html>
  );
  // return <html dangerouslySetInnerHTML={{ __html }}></html>;
  return (
    <html lang="en">
      <body>
        <pre>{html}</pre>
        {children}
      </body>
    </html>
  );
}
