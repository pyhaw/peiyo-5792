import React from "react";
import Image from "next/image";
import pic from "../images/IMG_2405.JPG";
import Link from "next/link";

export default function Menu({ index }) {
  const CCAtype = ["HWAC", "Volunteer Corp", "Block Committee"];

  const CCAList = [
    ["HWAC", "Volunteer Corp", "Block Committee"],
    ["Danshers", "Band", "Geyao"],
    ["Football", "Basketball", "Netball"],
  ];

  return (
    <section
      id="grid"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      {CCAList[index].map((CCA) => (
        <div
          key={CCA}
          className="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Link href={{ pathname: "/eachCCA", query: { key: CCA } }}>
            <Image
              src={pic}
              alt="cca"
              className="h-48 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {CCAtype[index]}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {CCA}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}