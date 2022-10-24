import React from 'react'

function Card(props) {
  return (
    <div className=' shadow-2xl rounded-lg bg-gray-50'>
        <div className='py-3 px-2 border-gray-300 border-b-2'>{props.title}</div>
         <div className='px-2  py-9'>
           {props.children} 
         </div>
    </div>
  )
}

export default Card