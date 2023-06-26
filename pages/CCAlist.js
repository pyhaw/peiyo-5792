import Head from "next/head";
import Format from "../layout/format";
import Menu from "../components/ccamenu.js";
export default function CCAsearch() {
  return (
    <>
      <Head>
        <title>Cultural CCAs</title>
      </Head>
      <Format>
        <h1 class="text-center mt-12 font-bold text-3xl">Cultural CCAs</h1>
        <Menu />
      </Format>
    </>
  );
}
