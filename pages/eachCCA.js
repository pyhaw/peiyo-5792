import { useRouter } from "next/router";
import Head from "next/head";
import Format from "../layout/format";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "@/context/firebase-context";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

const cca = {
  name: "Danshers",
  member: 40,
};

export default function CCApage() {
  const router = useRouter();
  const { key } = router.query;

  const selectedKey = key ? key.toString() : "";

  const { details, updateCCADescription } = useContext(FirebaseContext);

  const [aboutUs, setAboutUs] = useState(null);
  const [ourEvents, setOurEvents] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const getCCADescription = async () => {
    try {
      const docRef = doc(db, "CCADescription", selectedKey);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists) {
        const data = docSnapshot.data();

        setAboutUs(data["About Us"]);
        setOurEvents(data["Our Events"]);
        console.log("Document read successfully!");
      } else {
        console.log("Document not found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log(details);
    getCCADescription();
  }, []);

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
              {/* Edit Button */}
              {!editMode && details === selectedKey && (
                <button
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-16 border border-blue-700 rounded mb-6"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
              )}

              {/* Confirm Button */}
              {editMode && details === selectedKey && (
                <button
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-16 border border-green-700 rounded mb-6"
                  onClick={() => {
                    setEditMode(false);
                    updateCCADescription(db, selectedKey, aboutUs, ourEvents);
                  }}
                >
                  Confirm
                </button>
              )}
              {/* Sign Up Button */}
              {details === "Member" && (
                <button
                  onClick={() => {
                    router.push({
                      pathname: "/bookslot",
                      query: { key: selectedKey },
                    });
                  }}
                  className="bg-orange-900 hover:bg-orange-700 text-white font-bold py-2 px-16 border border-orange-700 rounded mb-6"
                >
                  Sign up
                </button>
              )}

              <p className="mb-6"> Member : {cca.member} </p>
              {!editMode && details === selectedKey && (
                <button
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-16 border border-blue-700 rounded mb-6"
                  onClick={() =>
                    router.push({
                      pathname: "/manageslot",
                      query: { key: selectedKey },
                    })
                  }
                >
                  Bookings
                </button>
              )}
            </div>
            <div className="col-span-9">
              <section>
                <h2 className="text-xl font-semibold">About Us</h2>
                {editMode && details === selectedKey ? (
                  <textarea
                    className="pt-2 text-lg border rounded text-black"
                    value={aboutUs}
                    onChange={(e) => setAboutUs(e.target.value)}
                  />
                ) : (
                  <p className="pt-2 text-lg">{aboutUs}</p>
                )}
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-6">Our Events</h2>
                {editMode && details === selectedKey ? (
                  <textarea
                    className="pt-2 text-lg border rounded text-black"
                    value={ourEvents}
                    onChange={(e) => setOurEvents(e.target.value)}
                  />
                ) : (
                  <p className="pt-2 text-lg">{ourEvents}</p>
                )}
              </section>
            </div>
          </div>
        </main>
      </Format>
    </>
  );
}
