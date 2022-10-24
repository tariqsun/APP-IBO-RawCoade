import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'
function SideMenuItem(props) {
 const [state, setState] = useState({
  open:false,
 });

 const handleClick = (e) =>{
    e.preventDefault();
    if(state.open){
      setState({
        ...state,
        open:false
      })
    }else{
      setState({
        ...state,
        open:true
      })
    }
    
 }

  return (
    <>
      {props.children?(
      <li>
        <NavLink 
            to={props.route} 
            onClick={handleClick}
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >{props.icon} </span>
            <span className="ml-3 flex-1">{props.label}</span>
            {props.children?(
              <FaAngleDown className={state.open?'rotate-180':''+'inline-block ml-auto float-right'} />
            ):''}
        </NavLink>
        {state.open?(
          <ul className=' pl-3 '>
            {props.children}
            </ul>
        ):''}
    </li>
    ):(
      <li>
        <NavLink 
            to={props.route} 
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >{props.icon} </span>
            <span className="ml-3">{props.label}</span>
           
        </NavLink>
    </li>
    )}
    </>
  )
}

export default SideMenuItem