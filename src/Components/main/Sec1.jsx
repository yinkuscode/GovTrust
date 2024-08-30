import React from 'react'
import Input from "../Input"
import Button from '../Button'
import search from '../../assets/Vector.png'

function Sec1() {
  return (
        <div className='px-4 text-center bg-[#EEEEEE]'>
        <h1 className="pt-10 text-4xl font-semibold text-[#000000]">Our research is the foundation of our mission 
        </h1>
    <p className='pt-5 text-[#333333] text-center'>This research guides our efforts, helping us identify the areas where the need is greatest and enabling us to allocate resources effectively by working closely with government agencies and educational institutions</p>
    <div className='flex align-items justify-center pt-5 pb-10'>
         <Input className=" border rounded-lg p-2 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 " type="text" placeholder='find statistics,daily data and report' />
         <Button text="GovTrust search" src={search} style={{width:20, height: 19.64}} /> 
    </div>
    </div>
  )
}

export default Sec1