'use client'
import React, { useState } from 'react'
import { BiDownArrow} from 'react-icons/bi'
import { HiPencilAlt, HiTrash, HiPlusCircle, HiSave } from 'react-icons/hi'

export function TypeComp({value, index, onRemove}) {
  const [isEditing, setIsEditing] = useState(false);
  return(
    <div className='grid grid-cols-6 p-2 rounded-xl border border-gray-200/50 dark:border-gray-700'>
      <div className='col-span-4 flex space-x-2 w-full'>
        <span>{index+1}.</span>
        <form onSubmit={''} className='flex-wrap w-full'>
          <input type="text" value={value.value} className='bg-transparent w-2/3'/>
        </form>
      </div>
      <div className='col-span-2 flex items-center justify-end space-x-6'>
        <span onClick={()=>setIsEditing((p)=>!p)} className={`${isEditing?'text-blue-500':'hover:text-blue-500'}  cursor-pointer`}>
          {isEditing ? <HiSave/> : <HiPencilAlt/> }
        </span>
        <span className='hover:text-red-500 cursor-pointer'>
          <HiTrash onClick={() => onRemove(index)}/>
        </span>
      </div>
    </div>
  )
}

export default function ExpenceType({values, setValues, onRemove}) {
    const [expand, setExpand] = useState(false);
    const [addEnable, setAddEnable] = useState(false);
    const [newExpenseType, setNewExpenseType] = useState('');  
    const handleSaveExpenseTypes = () => {
      if (newExpenseType.trim() !== '') {
        const updatedValues = newExpenseType;
        setNewExpenseType('');
        setValues(updatedValues);
      }
      setNewExpenseType('');
      setAddEnable(false);
    };
  return (
    <div className='container_layout2 space-y-6'>
      {/* Header section */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold md:text-3xl'>Expence Type.</h1>
        <button onClick={()=>setExpand((p)=>!p)} className="btn_layout_icon lg:hidden">
          <span className={`${expand&&'rotate-180'} transition-all duration-300 btn_icon`}>
            <BiDownArrow size={22}/>
          </span>
        </button>
      </div>
      {/* Body section */}
      <div className={`space-y-6 ${expand?'block':'hidden lg:block'}`}>
        <div className='space-y-3'>
          {values.map((value, i)=>(
            <TypeComp key={i} index={i} value={value} onRemove={onRemove}/>
          ))}
        </div>
        {/* Footer Section */}
        <div className='space-y-6'>
          <input
            type='text'
            placeholder='Add new expense type'
            value={newExpenseType}
            onChange={(e) => setNewExpenseType(e.target.value)}
            className={`input_layout ${addEnable?'block':'hidden'}`}
          />
          <div className='flex items-center justify-center space-x-3'>
            <button onClick={()=>setAddEnable(true)} className='btn_layout_text'>
              <span className='btn_text'>
                <HiPlusCircle size={22}/>
                <span>Add</span>
              </span>
            </button>
            <button onClick={handleSaveExpenseTypes} className='btn_layout_text'>
              <span className='btn_text'>
                <HiSave size={22}/>
                <span>Save</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
