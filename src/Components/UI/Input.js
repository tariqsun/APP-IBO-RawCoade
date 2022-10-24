import React from 'react'

function Input(props) {
  return (
    <div class="mb-6">
        <label for="password" 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {props.label}
        </label>
        <input 
            {...props}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 />
         {props.errors?(
            <span className='text-red-700'>{props.errors}</span>        
         ):''}        
    </div>
  )
}

export default Input