import React from 'react'
import Logo from "../assets/logo.png"
import volunteer from "../assets/volunteer.png"

function Signup() {
  return (
    <div>
        <img src={Logo} alt="" />
        <div className='flex spaxe-x-2'>
      <div className=''>
              <h1 className='text-[#092D7A] text-3xl'>Hello</h1>
            <p className='text-[#333333]'>To get started please fill out the form below with your details</p>
            <form action="Submit" className=''>
                <input type="text" placeholder="Enter your name" />
                <input type="mail" placeholder='Enter your mail'/>
                <input type="text" placeholder='Enter your number' />
                <input type="text"  placeholder='Country/Region'/>
                <input type="text" placeholder='Area of Interest'/>
                <input type="text" placeholder='Motivation/Reason for joining'/>
                <input type="checkbox" /> <span>I agree to the above term</span>
            </form>
      </div>
      <div>
        <img src={volunteer} alt="" />
      </div>
        </div>
    </div>
  )
}

export default Signup