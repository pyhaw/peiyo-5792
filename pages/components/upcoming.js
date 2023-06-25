import React from "react";

const events = [
  {
    name: "RockFest",
    day: "TUE",
    date: "23",
    month: "MARCH",
    venue: "MPSH",
    time: "1200-1800",
  },

  {
    name: "RockFest",
    day: "TUE",
    date: "23",
    month: "MARCH",
    venue: "MPSH",
    time: "1200-1800",
  },

  {
    name: "RockFest",
    day: "TUE",
    date: "23",
    month: "MARCH",
    venue: "MPSH",
    time: "1200-1800",
  },

  {
    name: "RockFest",
    day: "TUE",
    date: "23",
    month: "MARCH",
    venue: "MPSH",
    time: "1200-1800",
  },
];

export default function Table() {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 bg-gray-300 px-2 rounded-md mx-6 my-4"
    >
      {events.map((event) => (
        <li key={event.name} className="flex justify-start gap-x-6 py-5">
          <div className="flex gap-x-5">
            <div className="min-w-0 flex-auto sm:items-center ml-3">
              <p className="text-m leading-3 text-gray-600 text-center tracking-widest">
                {event.day}
              </p>
              <p className="truncate text-3xl text-gray-600 text-center">
                {event.date}
              </p>
              <p className="text-xs leading-3 text-gray-600 text-center">
                {event.month}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-start mr-3 justify-between">
            <p className="text-sm font-semibold text-gray-900">{event.name}</p>
            <p className="text-xs text-gray-600 text-center">{event.venue}</p>
            <p className="text-xs text-gray-600 text-center">{event.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
