import React from 'react'

function Input(props) {
  return (
    <div>
        <input  className="px-72 py-2 p-2 pl-4 placeholder:text-left border border-gray-300 rounded" type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  )
}

export default Input