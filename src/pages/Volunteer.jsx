import React from "react";
import Header from "../Components/Header/Header";
import Button from "../Components/Button";
import { IoCloudUploadOutline } from "react-icons/io5";

function Volunteer() {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <h1 className="text-black-500 text-3xl mt-10 mb-5 text-center">
          Hello
        </h1>
        <p className="text-[#333333] mb-5 text-center">
          To get started, please fill out the form below with your details.
        </p>
        <div className="flex justify-center">
          <form action="Submit" className="">
            <div className="flex gap-10">
              <div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Enter Full Name"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    class=" border border-gray-300 text-black-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Interest"
                    placeholder="Area of Interest"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Availability"
                    placeholder="Availability"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Preferred Roles"
                    placeholder="Preferred Roles"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your Email"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Country/Region"
                    placeholder="Country/Region"
                    class=" border border-gray-300 text-black-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Motivation/Reason for Volunteering"
                    placeholder="Motivation/Reason for Volunteering"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Location"
                    placeholder="Location"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Skills and Interests"
                    placeholder="Skills and Interests"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>I agree to all Terms, Privacy Policy and Fees</span>
              </label>
            </div>
            <Button
              text="Sign Up"
              className="mt-5 flex justify-center items-center "
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
