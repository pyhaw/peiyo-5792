import Head from "next/head";
import Format from "../layout/format";
import Calendar from "../components/calendar";
import TableList from "../components/tablelist";
import MyCCA from "../components/myCCA";

export default function DashBoard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Format>
        <div className="grid md:grid-cols-12 gap-4 mx-20 my-4">
          <div className="col-span-4">
            <Calendar />
          </div>
          <div className="col-span-4">
            <TableList />
          </div>
          <div className="col-span-4">
            <MyCCA />
          </div>
        </div>
      </Format>
    </>
  );
}
