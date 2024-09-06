import React from 'react'
import Button from './Button'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';


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
          <a href="/" className="text-white hover:text-blue-400">Home</a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-blue-400">About</a>
        </li>
        <li>
          <a href="/contains" className="text-white hover:text-blue-400">Contact</a>
        </li>
      </ul>
          </nav>
          </div>
          <div className='flex gap-4 mr-5'>
            <Button  text="Sign up"/>
            <Button text="Login "/>
          </div>
      </div>
  )
}

export default Nav