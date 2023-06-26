import React, { Fragment } from "react";

import Navbar from "./navbar";

export default function Format({ children }) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <main
        className="h-screen"
        style={{ backgroundColor: "rgb(17 24 39)", minHeight: "100%" }}
      >
        {children}
      </main>
    </Fragment>
  );
}
