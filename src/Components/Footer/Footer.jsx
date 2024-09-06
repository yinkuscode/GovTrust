import React from 'react'
import twitter from '../../assets/twitter.png'
import ing from '../../assets/ing.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/vector.png'
import c from '../../assets/cc.png'

function Footer() {
  return (
    <div>
        <div className='flex justify-between items-center text-center mt-20 text-base font-normal text-[#333333]'>
            <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>COMPANY</h1>
            <p>About Govtrust</p>
            <p>Trust</p>
            <p>Contact</p>
            <p>Help & FAQ</p>
            <p>Govtrust R</p>
        </div>
        <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>PLATFORM</h1>
            <p>First Step</p>
            <p>Govtrust Database</p>
            <p>Our Resources</p>
            <p>Success Stories</p>
        </div>
        <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>PRODUCT</h1>
            <p>Accurate Data Collection</p>
            <p>Sponsorship Matching Platform</p>
            <p>Resource Allocation Insights</p>
            <p>Community Empowerment</p>
        </div>
        <div className='leading-8'>
            <h1 className='text-[#000000] font-bold'>MEDIA /LIBRARY</h1>
            <p>Photos</p>
            <p>Videos</p>
            <p>Press Releases</p>
            <p>Infographics and Reports</p>
        </div>
        </div>
        <div className='flex gap-x-96 mt-7 mb-4'>
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