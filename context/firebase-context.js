import React, { createContext, useState } from "react";

import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [details, setDetail] = useState();
  const [user, setUser] = useState(null);
  const [availableSlots, setAvailableSlots] = useState();
  const [bookedSlots, setBookedSlots] = useState();

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
          setDetail(doc.data().CCA);
          console.log("Set Successfully");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCCADescription = async (
    database,
    selectedCCA,
    aboutUs,
    ourEvents
  ) => {
    try {
      const docRef = doc(database, "CCADescription", selectedCCA);

      await updateDoc(docRef, {
        "About Us": aboutUs,
        "Our Events": ourEvents,
      });

      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const bookInterviewSlot = async (database, CCA, date, time) => {
    try {
      const docRef = doc(collection(database, "Slots", CCA, date));

      await setDoc(docRef, {
        Time: time,
        Email: user.email,
      });

      alert("Booking confirmed!");
    } catch (error) {
      console.log(error);
    }
  };

  const getBookedSlots = async (database, CCA, date) => {
    const timeSlots = [];
    const bookingMadeBy = [];
    const slotsRef = collection(database, "Slots", CCA, date);
    const querySnapshot = await getDocs(slotsRef);

    querySnapshot.forEach((doc) => {
      timeSlots.push(doc.data().Time);
      bookingMadeBy.push(doc.data().Email);
    });

    const combinedSlots = timeSlots.map((time, index) => ({
      time: time,
      bookedBy: bookingMadeBy[index],
    }));

    setBookedSlots(combinedSlots);

    return timeSlots;
  };

  const getAvailableSlots = async (database, CCA, date) => {
    const slots = [
      "18.00 - 18.15",
      "18.15 - 18.30",
      "18.30 - 18.45",
      "18.45 - 19.00",
      "19.00 - 19.15",
      "19.15 - 19.30",
      "19.30 - 19.45",
      "19.45 - 20.00",
    ];

    const bookedSlots = await getBookedSlots(database, CCA, date);

    if (bookedSlots && bookedSlots.length > 0) {
      const tempSlots = slots.filter((slots) => !bookedSlots.includes(slots));
      setAvailableSlots(tempSlots);
    } else {
      setAvailableSlots(slots);
    }
  };

  const deleteBookingSlot = async (database, CCA, date, time) => {
    const slotsRef = collection(database, "Slots", CCA, date);
    const querySnapshot = await getDocs(
      query(slotsRef, where("Time", "==", time))
    );

    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref)
        .then(() => {
          console.log(`Document with time ${time} deleted successfully.`);
        })
        .catch((error) => {
          console.error("Error deleting document:", error);
        });
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        user: user,
        details: details,
        availableSlots: availableSlots,
        bookedSlots: bookedSlots,
        setUser,
        registerLeaderFirestore,
        registerMemberFirestore,
        checkUserDetails,
        updateCCADescription,
        getBookedSlots,
        bookInterviewSlot,
        getAvailableSlots,
        deleteBookingSlot,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
