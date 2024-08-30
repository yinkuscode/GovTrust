import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='focus:outline-none text-[#FFFFFF] bg-[#053157] text-sm px-6 py-2'>{props.text}</button>
    </div>
  )
}

export default Button