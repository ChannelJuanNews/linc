import React, { useContext } from "react";

import { store } from "@/util/store.js";

export default function NavBar() {
  const globalState = useContext(store);

  console.log("global state is navbar is", globalState);

  return <div> </div>;
}
