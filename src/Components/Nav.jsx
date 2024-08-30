import React from 'react'
import Button from './Button'
import logo from "../assets/logo.png"

function Nav() {
  return (
      <div className='mx-4 flex text-center items-center justify-between bg-[#FFFFFF] '>
          <div>
              <img src={logo} alt="" srcset="" />
          </div>
          <div>
            <nav>
              <ul className='flex gap-5 text-[#000000]'>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Upload data</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Contact  Us</a></li>
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