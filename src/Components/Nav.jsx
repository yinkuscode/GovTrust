import React from 'react'
import Button from './Button'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import Dropdown from '../Components/Dropdown';


function Nav() {
  return (
      <div className='mx-4 flex text-center items-center justify-between bg-[#FFFFFF] '>
          <div>
              <img src={logo} alt=""  />
          </div>
          <div>
            <nav>
        <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-black hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="/uploadata" className="text-black hover:text-blue-400">Upload data</Link>
        </li>
        <li>
          <Link to="/blogs" className="text-black hover:text-blue-400">Blog</Link>
        </li>
        <li>
          <Link to="/contains" className="text-black hover:text-blue-400">Contact Us</Link>
        </li>
      </ul>
          </nav>
          </div>
          <div className='flex gap-4 mr-5'>
            <Button  text="Sign up" className="bg-[#053157]"/> <Dropdown/>
            <Link to="/Login"><Button text="Login "/></Link>
          </div>
      </div>
  )
}

export default Nav