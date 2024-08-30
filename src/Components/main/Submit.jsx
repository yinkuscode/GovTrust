import React from 'react'
import Data from "../../assets/data.png"
import Button from '../Button'


function Submit() {
  return (
    <div className='bg-[#EEEEEE] px-10 py-5 flex  align-items space-x-12 gap-8 mt-11'>
        <img src={Data} alt="" style={{width:'555', height:'433'}}/>
        <div>
            <h1 className='text-[#41478D] text-3xl mt-12 mb-5'>Submit data as a Data Collector</h1>
            <p className='mb-5'>Submit data of the children  as a data collector write a short write up about submit data as a data collector Log in to our secure online platform, where you can easily input and upload the collected data. The platform is designed to be user-friendly, with clear instructions to guide you through the process.</p>
            <Button text="Get Started"/>
        </div>
    </div>
  )
}

export default Submit