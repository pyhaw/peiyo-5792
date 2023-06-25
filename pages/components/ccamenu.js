import Image from "next/image";
import pic from "../images/IMG_2405.jpg"


export default function menu() {
  return (
  <section id="grid"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div class="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
              <Image src={pic}
                      alt="cca" class="h-48 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Cultural</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">Danshers</p>
              </div>
          </a>
      </div>
      <div class="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
              <Image src={pic}
                      alt="cca" class="h-48 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Cultural</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">Danshers</p>
              </div>
          </a>
      </div>
      <div class="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
              <Image src={pic}
                      alt="cca" class="h-48 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Cultural</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">Danshers</p>
              </div>
          </a>
      </div>
      <div class="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
              <Image src={pic}
                      alt="cca" class="h-48 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Cultural</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">Danshers</p>
              </div>
          </a>
      </div>      
      <div class="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
              <Image src={pic}
                      alt="cca" class="h-48 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Cultural</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">Danshers</p>
              </div>
          </a>
      </div>      
      <div class="w-72 bg-white shadow-md rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
              <Image src={pic}
                      alt="cca" class="h-48 w-72 object-cover rounded-t-xl" />
              <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Cultural</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">Danshers</p>
              </div>
          </a>
      </div>
    </section>
)
};