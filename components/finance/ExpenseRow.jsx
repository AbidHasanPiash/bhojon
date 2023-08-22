import React from 'react'
import { HiTrash } from 'react-icons/hi'

export default function ExpenseRow({ index, type, description, amount, onChange, onRemove }) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-10 gap-2'>
      <div className='lg:row-start-1 lg:col-span-2 flex items-center justify-start space-x-2'>
        <p className='input_layout2 w-12 text-center'>{index + 1}</p>
        <select
          className='select_layout w-full'
          value={type?.value}
          onChange={(e) => onChange(index, 'type', e.target.value)}
        >
          {type?.map((t, i)=>(
            <option key={i} value={t.value}>{t.value}</option>
          ))}
        </select>
      </div>
      <div className='row-start-3 lg:row-start-1 col-span-2 lg:col-span-6'>
        <input
          type='text'
          placeholder='Explain in short'
          className='input_layout'
          value={description}
          onChange={(e) => onChange(index, 'description', e.target.value)}
        />
      </div>
      <div className='lg:row-start-1 lg:col-span-2 flex items-center justify-end space-x-2'>
        <input
          type='number'
          placeholder='amount'
          className='input_layout'
          value={amount}
          onChange={(e) => onChange(index, 'amount', e.target.value)}
        />
        <button className="btn_layout_icon" onClick={() => onRemove(index)}>
          <span className="btn_icon px-2"><HiTrash size={22}/></span>
        </button>
      </div>
    </div>
  )
}
