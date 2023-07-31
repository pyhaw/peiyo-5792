import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";

import Head from "next/head";
import Format from "../layout/format";
import Option from "../components/timeslot.js";
import { FirebaseContext } from "@/context/firebase-context";
import { db } from "@/firebase.config";

const pos = { cca: "SMB", comm: "Logistics", lev: "maincomm" };

export default function BookSlot() {
  const getMinDate = () => {
    const currentDate = new Date();
    const nextDay = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

    return nextDay;
  };
  const [date, setDate] = useState(getMinDate());

  const { availableSlots, getAvailableSlots } = useContext(FirebaseContext);

  const router = useRouter();
  const { key } = router.query;
  const CCA = key ? key.toString() : "";

  const getMaxDate = () => {
    const currentDate = new Date();
    const nextTwoMonths = new Date(currentDate);

    nextTwoMonths.setMonth(currentDate.getMonth() + 2);

    return nextTwoMonths;
  };

  useEffect(() => {
    getAvailableSlots(
      db,
      CCA,
      date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, [date]);

  return (
    <>
      <Head>
        <title>Book interview slot</title>
      </Head>
      <Format>
        <h1 className="text-center mt-12 font-semibold text-3xl">
          Choose your interview slot
        </h1>
        <h1 className="text-center mt-2 font-semibold text-3xl mb-6">
          for {CCA}
        </h1>
        <div className="app">
          <Calendar
            className="calendar"
            onChange={setDate}
            value={date}
            minDate={getMinDate()}
            maxDate={getMaxDate()}
            maxDetail="month"
            tileDisabled={({ date }) =>
              date.getDay() === 0 || date.getDay() === 6
            }
          />
        </div>
        <p className="mt-10 text-xl font-semibold tracking-tight text-gray-300 text-center justify-center">
          Available slots on {date.toDateString()}
        </p>
        {availableSlots !== undefined ? (
          <div className="container mx-auto sm:flex-row items-center justify-center gap-4 max-w-xl">
            {availableSlots.map((slot, index) => {
              return (
                <Option
                  slot={slot}
                  date={date.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  CCA={CCA}
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </Format>
    </>
  );
}