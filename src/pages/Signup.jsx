import React from "react";
import Logo from "../assets/logo.png";
import volunteer from "../assets/volunteer.png";
import Button from "../Components/Button";

function Signup() {
  return (
    <div class="mx-10">
      <img src={Logo} alt="" />
      <div className="flex flex-row">
        <div className="basis-1/2">
          <div>
            <h1 className="text-[#092D7A] text-3xl mt-10 mb-5 text-center">Hello</h1>
            <p className="text-[#333333] mb-5 text-center">
              To get started please fill out the form below with your details
            </p>
          </div>
          <div>
            <form action="Submit" className="">
            <div class="mb-6">
            <label for="first name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="firstaname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="mb-6">
            <label for="phone number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="mb-6">
    <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country/Region</label>
    <input type="text" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="mb-6">
    <label for="interest" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area of Interest</label>
    <input type="text" id="interest" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="mb-6">
    <label for="Motivation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Motivation/Reason for joining</label>
    <input type="text" id="motivation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
              <input type="checkbox" className="mt-5 mb-5" /> <span>I agree  to all Term Privacy  Policy</span>
              <Button text="Submit" className="mt-5 flex justify-center"/>
            </form>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={volunteer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
