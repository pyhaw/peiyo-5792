import React, { useContext, useState } from "react";
import { FirebaseContext } from "@/context/firebase-context";
import { db } from "@/firebase.config";

export default function Option({ slot, date, CCA }) {
  const { bookInterviewSlot } = useContext(FirebaseContext);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    // Show a confirmation prompt to double confirm the booking
    const confirmBooking = window.confirm(
      "Are you sure you want to book this slot?"
    );

    if (confirmBooking) {
      bookInterviewSlot(db, CCA, date, slot);

      setIsBooked(true);
    }
  };

  return (
    <div className="duration-300 hover:scale-105 hover:shadow-xl justify-center mt-6 mx-2 max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 flex flex-row justify-between items-center">
        <p className="font-normal text-gray-300 text-center flex-grow mr-2">
          {slot}
        </p>
        <button
          className={`${isBooked ? "bg-gray-500" : "bg-blue-500"} hover:${
            isBooked ? "bg-gray-600" : "bg-blue-600"
          } text-white font-bold py-2 px-4 rounded focus:outline-none flex-shrink`}
          onClick={handleBooking}
          disabled={isBooked}
        >
          {isBooked ? "Booked" : "Book"}
        </button>
      </div>
    </div>
  );
}
