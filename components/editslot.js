import React, { useState, useContext } from "react";
import Image from "next/image";
import pic1 from "../images/IMG_2445.jpg";
import pic2 from "../images/IMG_2405.JPG";
import pic3 from "../images/IMG_3.jpeg";
import { FirebaseContext } from "@/context/firebase-context";
import { db } from "@/firebase.config";

export default function OptionWithEdit({ slot, email, date, CCA }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const { deleteBookingSlot } = useContext(FirebaseContext);

  const handleDeletion = () => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (confirmDeletion) {
      deleteBookingSlot(db, CCA, date, slot).then(() => {
        setIsDeleted(true); // Mark the button as deleted after successful deletion
      });
    }
  };

  return (
    <div
      className={`flex items-center justify-between mt-8 mx-2 max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
        isDeleted ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="p-5">
        <p className="mb-1 font-normal text-gray-300">{slot}</p>
        <p className="mb-1 text-lg font-normal tracking-tight text-gray-300">
          {isDeleted ? "Deleted" : email}
        </p>
      </div>
      <div className="justify-end">
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-10 border border-blue-700 rounded mr-5">
          Edit
        </button>
        <button
          onClick={handleDeletion}
          disabled={isDeleted} // Disable the button based on the isDeleted state
          className={`bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-10 border border-blue-700 rounded mr-5 ${
            isDeleted ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {isDeleted ? "Deleted" : "Delete"}
        </button>
      </div>
    </div>
  );
}
