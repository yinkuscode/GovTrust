import React from "react";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Uploadata() {
  return (
    <div className="">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <h1 className="text-black-500 text-3xl mt-10 mb-5 text-center">Hello</h1>
      <p className="text-[#333333] mb-5 text-center">
        To get started please fill out the form below with your details
      </p>
      <div className="flex justify-center">
        <form action="Submit" className="">
          <div className="flex gap-10">
            <div>
              <div class="mb-6">
                <label
                  for="first name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstaname"
                  class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  class=" border border-gray-300 text-black-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="organization"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Organization/Institutional Name
                </label>
                <input
                  type="text"
                  id="organization"
                  class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your mail
                </label>
                <input
                  type="email"
                  id="email"
                  class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="country"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country/Region
                </label>
                <input
                  type="text"
                  id="country"
                  class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="data"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type of Data being submitted
                </label>
                <input
                  type="text"
                  id="data"
                  class="border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="data"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Data Collection
            </label>
            <input
              type="date"
              id="date"
              class="border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label
              for="data"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Additional Comments or notes
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-black-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="border border-dashed border-gray-300 rounded-md p-8 flex flex-col items-center justify-center">
            <div className="text-blue-500 text-lg mb-2">
              {/* <i className="fas fa-cloud-upload-alt mr-2"></i>  */}
              <IoCloudUploadOutline className="ml-24" /> Drag & drop files and
              Browse
            </div>
            <p className="text-gray-500 text-sm">
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </p>
          </div>
          <div className="mt-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I agree to all Terms, Privacy Policy and Fees</span>
            </label>
          </div>
          <Button text="Submit" className="mt-5 flex justify-center" />
        </form>
      </div>
    </div>
  );
}

export default Uploadata;
