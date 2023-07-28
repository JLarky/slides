import { lazy } from "react";
import { CRAComponent } from "./CRAComponent";
import App from "./App";

export default function Home() {
  // console.log(window);
  return <CRAComponent>{<App />}</CRAComponent>;
}
