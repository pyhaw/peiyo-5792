import Image from "next/image";
import pic1 from "../images/IMG_2445.jpg"
import pic2 from "../images/IMG_2405.JPG"
import pic3 from "../images/IMG_3.jpeg"

export default function Cards() {
  return (
    <div class="container mx-auto my-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl">
      <div class="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image class="rounded-t-lg" src={pic2} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Committee</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center"> PLS choose cultural cca</p>
        </div>
      </div>

      
        <div class="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="./CCAlist">
          <Image class="rounded-t-lg" src={pic2} alt="" />
              <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Cultural</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">click here for demo</p>
        </div>
        </a>
      </div>
      

      <div class="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image class="rounded-t-lg" src={pic2} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Sports</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">PLS choose cultural cca </p>
        </div>
      </div>

    </div>
  )
};