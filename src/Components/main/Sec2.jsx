import React from 'react'
import peopleimage from '../../assets/people.png'
import Button from '../Button'
function Sec2() {
  return (
    <div className='mx-5 flex flex-row space-x-9 align-items justify-center mt-20'>
        <div className='flex-grid basis-2/4'>
            <h1 className='text-[#053157] font-semibold text-5xl mb-10'>Empowering our future Together</h1>
            <p className='mb-10 text-[#333333]'>Through GovTrust,  we are driven by a simple powerful mission: to ensure that every child has the opportunity to receive a quality education. We believe that education is the cornerstone of personal growth and societal development, and it should be accessible to all children, regardless of their circumstances.Our goal is to reduce the number of children on the streets and increase school attendance to at least 70%. To achieve this.</p>
            <Button text="Learn More"/>
        </div>
        <div className='basis-2/4'>
            <img src={peopleimage} alt="" srcset="" style={{ width: 582, height: 405 }} />
        </div>
    </div>
  )
}
export default Sec2