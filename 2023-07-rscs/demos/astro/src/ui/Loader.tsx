"use client";

export const loader = () => {
  console.log("fetching data");
  return fetch("https://api.github.com/repos/fogbender/b2b-saaskit")
    .then((res) => res.json())
    .then((data) => data.stargazers_count);
};
export const Loader = async () => {
  const data = await loader();
  return <div>Loader {data}</div>;
};
