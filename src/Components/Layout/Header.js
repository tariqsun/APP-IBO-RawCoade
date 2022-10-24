import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
  return (
        <nav className="bg-white border-gray-50 border-b-2 shadow-lg px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
               <ul className='flex'>
                    <li>
                        <button><AiOutlineMenu className='text-2xl' /></button>
                    </li>
               </ul>
               <ul className='ml-auto relative hidden'>
                    <li>
                        <button><AiOutlineMenu className='text-2xl' /></button>
                        <ul className=' absolute w-60 right-0 bg-gray-800 shadow-sm z-10'>
                            <li className='py-2 px-2 text-lg text-gray-50'>Home</li>
                            <li className='py-2 px-2 text-lg text-gray-50'>Home</li>
                            <li className='py-2 px-2 text-lg text-gray-50'>Home</li>
                            <li className='py-2 px-2 text-lg text-gray-50'>Home</li>
                        </ul>
                    </li>
               </ul>
            </div>
        </nav>

  )
}

export default Header