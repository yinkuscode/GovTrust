import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import Button from "../Button"

function Blog() {
  return (
    <div className='mx-5 '>
      <h1 className='text-[#41478D] text-center mb-10 text-3xl text-bold'>Blog</h1>
      <div className='grid grid-cols-3'>
        <div className='bg-[#6C71AA] mx-5 rounded'>
          <img src={image1} alt="" />
          <h1 className='text-xl mt-5 mb-5 ml-5'>GovTrust: Latest News</h1>
          <p className='text-normal text-[#333333] mb-5 ml-5'>Get real-time updates on our initiatives, including new partnerships, successful events, and milestones we’ve achieved. Stay connected with our ongoing efforts to bring education to every child.</p>
          <Button text="More Information" className="bg-[#053157]"/>
        </div>
      <div className='bg-[#6C71AA] mx-5 rounded'>
          <img src={image2} alt="" />
          <h1 className='text-xl mt-5 mb-5 ml-5'>Govtrust Report: Impact Stories</h1>
          <p className='text-normal text-[#333333] mb-5 ml-5'> Read inspiring stories from the field that showcase the difference we’re making in children’s lives. Discover how our programs are transforming communities and giving hope to families.</p>
          <Button text="More Information" className=""/>
      </div>
      <div className='bg-[#6C71AA] mx-5 rounded'>
          <img src={image3} alt="" />
          <h1 className='text-xl mt-5 mb-5 ml-5'>GovTrust Report: Policy Updates</h1>
          <p className='text-normal text-[#333333] mb-5 ml-5'>  Learn about the latest policy changes and government actions that impact education in Nigeria. </p>
          <Button text="More Information"/>
      </div>
      </div>
    </div>
  )
}

export default Blog