import { useRouter } from "next/router";
import Head from "next/head";
import Format from "../layout/format";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "@/context/firebase-context";

const cca = {
  name: "Danshers",
  member: 40,
};

export default function CCApage() {
  const router = useRouter();
  const { key } = router.query;

  const selectedKey = key ? key.toString() : "";

  const { details } = useContext(FirebaseContext);

  const [editAboutUs, setEditAboutUs] = useState(false);
  const [editOurEvents, setEditOurEvents] = useState(false);

  const editMode = () => {
    console.log(details);
    console.log(selectedKey);

    if (details === selectedKey) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log(details);
    console.log(selectedKey);
  });

  return (
    <>
      <Head>
        <title>{selectedKey}</title>
      </Head>
      <Format>
        <main>
          <h1 className="text-center text-3xl bg-orange-300 p-5 uppercase font-bold text-orange-900">
            {selectedKey}
          </h1>
          <div className="grid md:grid-cols-12 gap-4 mx-20 px-10 mt-9 mb-4">
            <div className="col-span-3">
              <button onClick={() => router.push("/bookslot")} className="bg-orange-900 hover:bg-orange-700 text-white font-bold py-2 px-16 border border-orange-700 rounded mb-6">
                Sign up
              </button>
              <p> Member : {cca.member} </p>
            </div>
            <div className="col-span-9">
              <section>
                <h2 className="text-xl font-semibold">About Us</h2>
                {!editMode ? (
                  <textarea className="pt-2 text-lg border rounded" />
                ) : (
                  <p className="pt-2 text-lg">About Us</p>
                )}
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-6">Our Events</h2>
                {editMode ? (
                  <textarea className="pt-2 text-lg border rounded" />
                ) : (
                  <p className="pt-2 text-lg">Our Events</p>
                )}
              </section>
            </div>
          </div>
        </main>
      </Format>
    </>
  );
}
