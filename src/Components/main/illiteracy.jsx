import React from 'react'
import Button from '../Button'
import Illiteracy from '../../assets/illiteracy.png'


function illiteracy() {
  return (
    <div className='flex space-x-80 mx-10 gap-10 mt-10'>
        <div className='w-1/2'>
            <h1 className='text-[#41478D] text-3xl font-medium mt-10 mb-5'>Be a part of ending child illiteracy</h1>
            <p className='text-[#333333] mb-10'> By supporting our mission, you become a part of something bigger, movement to bring hope and opportunity to children who need it most. Your support helps us gather the data we need to identify these children, connect them with sponsors, and ensure they have access to education, with your help, we can build schools, provide resources, and give children the tools they need to thrive. We can empower communities, strengthen families, and create lasting change.</p>
            <Button  className="bg-[#053157]" text="Donate"/>
        </div>
        <div>
            <img src={Illiteracy} alt="" />
        </div>
    </div>
  )
}

export default illiteracy