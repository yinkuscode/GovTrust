import React from 'react'
import Input from "../Input"
import Button from '../Button'
import search from '../../assets/Vector.png'

function Sec1() {
  return (
        <div className='px-4 text-center bg-[#EEEEEE]'>
        <h1 className="pt-10 text-4xl font-semibold text-[#000000]">Data Drive our Mission to Change Education
        </h1>
    <p className='pt-5  text-[#333333] text-center'>This research guides our efforts, helping us identify the areas where the need is greatest and enabling us to allocate resources</p> 
    <p> effectively by working closely with government agencies and educational institutions</p>
    <div className='flex align-items justify-center pt-5 pb-10 mt-5'>
         <Input className="px-72 py-2 p-2 pl-4 placeholder:text-left border border-gray-300 rounded" type="text" placeholder='find statistics, daily data' />
         <button className="bg-blue-500 text-white rounded-r-md px-6 py-2">GovTrust Search</button>
    </div>
    </div>
  )
}

export default Sec1