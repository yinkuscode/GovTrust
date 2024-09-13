import React from "react";
import Header from "../Components/Header/Header";
import Button from "../Components/Button";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1 className="text-black-500 font-medium text-3xl mt-10 mb-5 text-center">
        WELCOME
      </h1>
      <p className="text-[#333333] mb-5 text-center">We are glad you’re here</p>
      <div className="flex justify-center item-center h-screen">
        <form action="Submit">
          <div className="">
            <div class="mb-6">
              <input
                type="text"
                id="Email"
                placeholder="Enter your Email"
                class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                id="Password"
                placeholder="Password"
                class=" border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 placeholder-black  focus:border-blue-500 block p-2.5 w-full  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <Button text="Login " />
          <div className="mt-6 justify-center item-center">
            <p className="flex">
              Don’t have an account?{" "}
              <Link to="/Signup">
                <p>Signup</p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
