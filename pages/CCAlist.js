import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Format from "../layout/format";
import Menu from "../components/ccamenu.js";

export default function CCASearch() {
  const CCAType = ["Committee CCAs", "Cultural CCAs", "Sports CCAs"];

  const router = useRouter();
  const { index } = router.query;

  // Parse the index value to an integer
  const selectedIndex = parseInt(index);

  // Check if selectedIndex is a valid index for CCAType array
  const title =
    selectedIndex >= 0 && selectedIndex < CCAType.length
      ? CCAType[selectedIndex]
      : "Page Not Found";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Format>
        <h1 className="text-center mt-12 font-bold text-3xl">{title}</h1>
        {selectedIndex >= 0 && selectedIndex < CCAType.length ? (
          <Menu index={selectedIndex} />
        ) : null}
      </Format>
    </>
  );
}
