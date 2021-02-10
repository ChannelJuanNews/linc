import React, { useContext } from "react";

import NavBar from "@/components/NavBar";
import LandingBody from "@/components/LandingBody";
import LandingFooter from "@/components/LandingFooter";

import { store } from "@/util/store.js";

// this is where we might do a csrf token creation call
export async function getServerSideProps(context) {
  return { props: { hello: "world" } };
}

// this is where we render the landing page
export default function Home(props) {
  // use the global state
  const globalState = useContext(store);

  console.log("global state in the landing page is", globalState);

  return (
    <div>
      <NavBar />
      <LandingBody />
      <LandingFooter />
    </div>
  );
}
