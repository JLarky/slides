"use client";
import { cache } from "react";
// ReactFeatureFlags = require('shared/ReactFeatureFlags');
// import ReactFeatureFlags from 'shared/ReactFeatureFlags';

// ReactFeatureFlags.enableCache = true;

console.log(cache);

export const loader = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("fetching data");
  // const res = await fetch('https://api.github.com/repos/fogbender/b2b-saaskit');
  // return (await res.json()).stargazers_count;
});

const test = cache(async () => 123);

export const LoaderCache = async () => {
  console.log(test());
  // const data = await loader();
  return (
    <>
      data
      <Loader />
    </>
  );
};

export const Loader = async () => {
  // const data = await loader();
  const data = 123;
  return <div>Loader {data}</div>;
};
