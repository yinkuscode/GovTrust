import React from 'react'
import Lagos from '../../assets/Lagos.png'
import BBHS from '../../assets/BBHS.png'
import oldstudent from '../../assets/oldstudent.png'
import medicalcare from '../../assets/medicalcare.png'
import medicare from '../../assets/medicare.png'
import cross from '../../assets/cross.png'
import educationallogo from '../../assets/educationallogo.png'
import KIH from '../../assets/kih.png'
import digitalclass from '../../assets/digitalclass.png'
import eagle from '../../assets/eagle.png'
import TDT from '../../assets/TDT.png'
import trueclear from '../../assets/trueclear.png'



function Sec4() {
  return (
    <div className='mx-10'>
        <div className='text-center'>
            <h1 className='text-[#000000] text-5xl font-medium mt-6'>Partners</h1>
        </div>
        <div className='mt-5 grid grid-cols-6 '>
            <img src={Lagos} alt="" srcset="" />
            <img src={BBHS} alt="" srcset="" />
            <img src={oldstudent} alt="" srcset="" />
            <img src={medicalcare} alt="" srcset="" />
            <img src={medicare} alt="" srcset="" />
            <img src={cross} alt="" srcset="" />
        </div>
        <div className='mt-5 grid grid-cols-6'>
          <img src={educationallogo} alt="" srcset="" />
            <img src={KIH} alt="" srcset="" />
            <img src={digitalclass} alt="" srcset="" />
            <img src={eagle} alt="" srcset="" />
            <img src={TDT} alt="" srcset="" />
            <img src={trueclear} alt="" srcset="" />
        </div>
        <hr />
    </div>
  )
}

export default Sec4