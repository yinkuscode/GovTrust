import React from 'react'
import Button from "../Components/Button";
import Header from '../Components/Header/Header';
import { IoCloudUploadOutline } from "react-icons/io5";

function DataSubmission() {
  return (
    <div className=''>
      <div>
        <div>
          <Header />
        </div>
        <h1 className="text-black-500 text-3xl mt-10 mb-5 text-center">
          Hello
        </h1>
        <p className="text-[#333333] mb-5 text-center">
        To get started, please fill out the form below with your details..
        </p>
        <div className="flex justify-center">
          <form action="Submit" className="w-fit">
            <div className="flex gap-10">
              <div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Enter Full Name"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Interest"
                    placeholder="Area of Interest"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your Email"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Country/Region"
                    placeholder="Country/Region"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    id="Motivation/Reason for Volunteering"
                    placeholder="Motivation/Reason for Volunteering"
                    class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div class="mb-6">
            <textarea
              id="message"
              rows="4"
              class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Additional Comments or Notes"
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
            <Button text="Sign Up" className="mt-5 flex justify-center" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default DataSubmission
