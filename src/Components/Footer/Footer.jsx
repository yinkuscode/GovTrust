import React from 'react'
import twitter from '../../assets/twitter.png'
import ing from '../../assets/ing.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/Vector.png'
import c from '../../assets/cc.png'

function Footer() {
  return (
    <div>
        <div className='flex justify-between items-center text-center mt-20 text-base font-normal text-[#333333]'>
            <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>COMPANY</h1>
            <ul>
                <li><a href="">About Govtrust</a></li>
                <li><a href="">Trust</a></li>
                <li><a href="/contains">Contact</a></li>
                <li><a href="">Help & FAQ</a></li>
                <li><a href="">Govtrust</a></li>
            </ul>
        </div>
        <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>PLATFORM</h1>
            <ul>
                <li><a href="">First Step</a></li>
                <li><a href="">Govtrust Database</a></li>
                <li><a href="">Our Resources</a></li>
                <li><a href="">Success Stories</a></li>
            </ul>
        </div>
        <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>PRODUCT</h1>
            <ul>
                <li><a href="">Accurate Data Collection</a></li>
                <li><a href="">Sponsorship Matching Platform</a></li>
                <li><a href="">Resource Allocation Insights</a></li>
                <li><a href="">Community Empowerment</a></li>
            </ul>
        </div>
        <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>MEDIA /LIBRARY</h1>
            <ul>
               <li><a href="">Photos</a></li>
               <li><a href="">Videos</a></li>
               <li><a href="">Press Releases</a></li>
               <li><a href="">Infographics and Reports</a></li>
            </ul>
        </div>
        </div>
        <div className='flex gap-x-24 mt-7 mb-4'>
            <div>
                <h1 className='text-[#000000] font-bold'>Follow Us</h1>
            </div>
            <div className='flex gap-5'>
                <img src={twitter} alt="" srcset="" />
                <img src={ing} alt="" srcset="" />
                <img src={facebook} alt="" srcset="" />
                <img src={youtube} alt="" srcset="" />
            </div>
        </div>
        <hr />
        <div className='flex gap-2 justify-center items-center mt-5'>
            <p>copyright</p>
            <img src={c} alt="" srcset="" />
            <p>2024 . Privacy policy Govtrust . Term of us</p>
        </div>
    </div>
    
  )
}

export default Footer