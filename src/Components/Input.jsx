import React from 'react'

function Input(props) {
  return (
    <div>
        <input  className="px-60 py-2" type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  )
}

export default Input