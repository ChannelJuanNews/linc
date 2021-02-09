import React, { useContext } from "react";
import { StateProvider } from "../util/store";
import { store } from "../util/store.js";

import NavBar from "../components/NavBar";

export default function Home() {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <StateProvider>
      <NavBar />
    </StateProvider>
  );
}
