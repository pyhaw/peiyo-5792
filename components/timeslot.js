import Image from "next/image";
import pic1 from "../images/IMG_2445.jpg"
import pic2 from "../images/IMG_2405.JPG"
import pic3 from "../images/IMG_3.jpeg"

export default function option(slot) {
  return (
      <div class=" duration-300 hover:scale-105 hover:shadow-xl justify-center mt-6 mx-2 max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <p class=" font-normal text-gray-300 text-center">{slot.time}</p>
        </div>
      </div>
  )
}