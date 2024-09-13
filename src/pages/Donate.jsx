import React from "react";
import Header from "../Components/Header/Header";

function Donate() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1 className="text-black-500 text-3xl mt-10 mb-5 text-center">
        Support Our Mission to End Child Illiteracy
      </h1>
      <p className="text-[#333333] mb-5 text-center">
        our mission is to ensure that every child has access to quality
        education, no matter their background or circumstances. We work
        tirelessly to reduce the number of children out on the streets by
        connecting them with schools and providing the necessary resources to
        support their education.
      </p>
      <div className="flex gap-10 justify-center ">
        <div>
          <div class="mb-6">
            <label
              for="data"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Full Name"
              class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <div class="mb-6">
            <label
              for="data"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Full Name"
              class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Donate;
