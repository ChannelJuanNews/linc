import { useContext } from "react";

import { store } from "@/util/store.js";

export default function LandingFooter() {
  const globalState = useContext(store);

  console.log("global state in landing footer is", globalState);

  return <div> </div>;
}
