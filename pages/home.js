import React, { Fragment } from "react";
import Head from "next/head";

import Banner from "../components/banner";
import Format from "../components/format";
import Table from "../components/upcoming";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Format>
        <Banner />
        <div className="grid md:grid-cols-7 mx-4 my-4">
          <div className="col-span-4">
            <Timeline />
          </div>
          <div className="col-span-3">
            <h1 className="text-center tracking-wider text-2xl">
              {" "}
              UPCOMING EVENTS
            </h1>
            <Table />
          </div>
        </div>
      </Format>
    </Fragment>
  );
}
