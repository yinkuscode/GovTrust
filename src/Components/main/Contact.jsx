import React from 'react'
import contact from "../../assets/contact.png"

function Contact() {
  return (
    <div>
      <h1 className='mt-10 mb-5 text-center text-[#0E1674] text-5xl'>Contact</h1>
      <p className='text-center text-[#333333]'> For any questions or information about our programs and activities, please feel free to contact us. We’re here to help and provide any details you may need.</p>
      <div className='flex '>
        <img src={contact} alt="" />
        <div className='mt-32 text-[#333333]'>
          <p>Asiwaju Shakiru</p>
          <p>Group Director </p>
          <p>Email  shafatia33@gmail.com</p>
          <p>Mon-Fri 9am-6pm (WAT)</p>
        </div>
      </div>
    </div>
  )
}

export default Contact