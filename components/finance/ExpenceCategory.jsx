'use client'
import React, { useState } from 'react'
import { BiDownArrow} from 'react-icons/bi'
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { TbPhotoEdit } from 'react-icons/tb';

export default function ExpenceCategory() {
    const [expand, setExpand] = useState(false)
  return (
    <div className='container_layout2 space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold md:text-3xl'>Category.</h1>
        <button onClick={()=>setExpand((p)=>!p)} className="btn_layout_icon lg:hidden">
          <span className={`${expand&&'rotate-180'} transition-all duration-300 btn_icon`}>
            <BiDownArrow size={22}/>
          </span>
        </button>
      </div>
    </div>
  )
}
