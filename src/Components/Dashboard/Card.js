import React from 'react'
import { Card as AntCard } from 'antd'

function Card({ label, text, icon, className, loading }) {
  return (
    <AntCard bordered={false} 
        style={{
          borderRadius:'8px'
       }} loading={loading?loading:false}>
        <div className='flex'>
            <div className='w-9/12'>
                <h5 className=' uppercase text-md mb-0 text-gray-500'>{label}</h5>
                <span className=' text-base '>{text}</span>
            </div>
            <div className='w-3/12'>
                <span className={`rounded-full ${className?className:'bg-gradient-to-r from-green-500 to-green-300'} inline-flex align-middle text-lg text-white justify-center items-center w-10 h-10 `}>
                    {icon}
                </span>
            </div>
        </div>
    </AntCard>
  )
}

export default Card