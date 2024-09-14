import React from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="mx-4 flex text-center items-center justify-between bg-[#FFFFFF]">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-black hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/uploadata" className="text-black hover:text-blue-400">
                Upload data
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-black hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contains" className="text-black hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 mr-5">
        <div className="dropdown">
          <Button text="Sign up" className="bg-[#053157]" />
          <div className="dropdown-content">
            <ul>
              <li>
                <Link to="/signup">As a Sponsor</Link>
              </li>
              <li>
                <Link to="/volunteer">As a Volunteer</Link>
              </li>
              <li>
                <Link to="/DataSubmission">Data Submission</Link>
              </li>
              <li>
                <Link to="/ResearchCollaboration">Research collaboration</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/login">
          <Button
            text="Login"
            className="border-solid border-2 border-[#053157] bg-white text-black"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
