import { useContext } from "react";
import { store } from "@/util/store.js";

export default function LandingBody() {
  const globalState = useContext(store);

  console.log("global state in landing body is", globalState);

  return <div> </div>;
}
