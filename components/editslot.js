import Image from "next/image";
import pic1 from "../images/IMG_2445.jpg"
import pic2 from "../images/IMG_2405.JPG"
import pic3 from "../images/IMG_3.jpeg"

export default function OptionWithEdit(slot) {
  return (
    <div class="flex items-center justify-between mt-8 mx-2 max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5">
      <p class="mb-1 font-normal text-gray-300">{slot.time}</p>
      <p class="mb-1 text-lg font-normal tracking-tight text-gray-300 ">{slot.bookedBy}</p>
    </div>
    <div className="justify-end">
      <button class="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-10 border border-blue-700 rounded mr-5">
              Edit
      </button>
      <button class="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-10 border border-blue-700 rounded mr-5">
              Delete
      </button>
    </div>
    </div>
  );
}