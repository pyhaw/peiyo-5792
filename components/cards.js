import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import pic2 from "../images/IMG_2405.JPG";
import Link from "next/link";

export default function Cards() {
  const CCAtype = ["Committee", "Cultural", "Sports"];
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto my-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl">
        {CCAtype.map((type, index) => (
          <div
            key={type}
            className="w-72 rounded-2xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link
              href={{
                pathname: "/CCAlist",
                query: { index: index },
              }}
            >
              <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300">
                <Image className="rounded-t-lg" src={pic2} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {type}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    Click here for a demo
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
