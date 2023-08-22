'use client'
import React, { useState } from 'react'
import { BiDownArrow} from 'react-icons/bi'
import { HiPencilAlt, HiTrash, HiPlusCircle, HiSave } from 'react-icons/hi'

export default function ExpenceType({values}) {
    const [expand, setExpand] = useState(false)
  return (
    <div className='container_layout2 space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold md:text-3xl'>Expence Type.</h1>
        <button onClick={()=>setExpand((p)=>!p)} className="btn_layout_icon lg:hidden">
          <span className={`${expand&&'rotate-180'} transition-all duration-300 btn_icon`}>
            <BiDownArrow size={22}/>
          </span>
        </button>
      </div>
      <div className={`space-y-6 ${expand?'block':'hidden lg:block'}`}>
        <div className='space-y-3'>
          {values.map((value, i)=>(
            <div key={i} className='flex items-center justify-between p-2 rounded-xl border border-gray-200/50 dark:border-gray-700'>
              <p className='flex space-x-2'>
                <span>{i+1}.</span>
                <span>{value.value}</span>
              </p>
              <div className='flex items-center justify-center space-x-6'>
                <HiPencilAlt/>
                <HiTrash/>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center space-x-3'>
          <button className='btn_layout_text'>
            <span className='btn_text'>
              <HiPlusCircle size={22}/>
              <span>Add</span>
            </span>
          </button>
          <button className='btn_layout_text'>
            <span className='btn_text'>
              <HiSave size={22}/>
              <span>Save</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
