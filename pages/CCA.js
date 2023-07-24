import React, { useState, useContext } from "react";

import Head from "next/head";
import Format from "../layout/format";
import SearchBar from "../components/searchbar.js";
import Cards from "../components/cards.js";

export default function CCAsearch() {
  return (
    <>
      <Head>
        <title>CCA search</title>
      </Head>
      <Format>
        <main>
          <div className="min-h-full">
            <h1 class="text-center mt-12 font-bold text-3xl">CCAs</h1>
            <Cards />
            <SearchBar />
          </div>
        </main>
      </Format>
    </>
  );
}