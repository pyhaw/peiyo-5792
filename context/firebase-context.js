import React, { createContext, useState } from "react";

import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [details, setDetail] = useState();
  const [user, setUser] = useState(null);

  const registerLeaderFirestore = async (database, userDetails) => {
    try {
      await setDoc(doc(collection(database, "Leaders")), userDetails);
      console.log("Leader registered!");
    } catch (error) {
      console.log(error);
    }
  };

  const registerMemberFirestore = async (database, userDetails) => {
    try {
      await setDoc(doc(collection(database, "Members")), userDetails);
      console.log("Member registered!");
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserDetails = async (database, userEmail) => {
    try {
      const collectionRef = collection(database, "Leaders");
      const q = query(collectionRef, where("email", "==", userEmail));
      const querySnapShot = await getDocs(q);

      if (querySnapShot.empty) {
        setDetail("Member");
      } else {
        querySnapShot.forEach((doc) => {
          const data = {
            CCA: doc.data().CCA,
          };
          setDetail(data);
          console.log("Set Successfully");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user: user,
        details: details,
        setUser,
        registerLeaderFirestore,
        registerMemberFirestore,
        checkUserDetails,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};