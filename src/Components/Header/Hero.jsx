import React from 'react'
import heroimage from '../../assets/hero.png'
import Button from '../Button'

function Hero() {
  return (
    <div className=''>
        <div className='relative'>
        <div className=''>
            <img src={heroimage} alt="" srcset="" style={{ width: 1410, height: 600 }}/>
        </div>
        <div className='pt-20 absolute inset-y-0 left-10  text-[#FFFFFF] w-656 flex flex-col
        justify-center h-screen '>
            <h1 className='pb-5  text-5xl font-semibold'>Transforming Education with data and the power of  communities </h1>
            <p className='pb-5 text-xl font-light '>Centralised education data system and crowdsourcing platfrom</p>
            <Button text="Get Involved"/>
        </div>
    </div>

    </div>
  )
}


export default Hero