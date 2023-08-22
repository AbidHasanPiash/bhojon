import React from 'react'
import { HiTrash } from 'react-icons/hi'

export default function ExpenseRow({ index, type, description, amount, onChange, onRemove }) {
  return (
    <div className='flex items-center space-x-2'>
      <p className='input_layout2 w-12 text-center'>{index + 1}</p>
      <select
        className='select_layout'
        value={type?.value}
        onChange={(e) => onChange(index, 'type', e.target.value)}
      >
        {type?.map((t, i)=>(
          <option key={i} value={t.value}>{t.value}</option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Explain in short'
        className='input_layout'
        value={description}
        onChange={(e) => onChange(index, 'description', e.target.value)}
      />
      <input
        type='number'
        placeholder='amount'
        className='input_layout2 w-24'
        value={amount}
        onChange={(e) => onChange(index, 'amount', e.target.value)}
      />
      <button className="btn_layout_icon" onClick={() => onRemove(index)}>
        <span className="btn_icon px-2"><HiTrash size={22}/></span>
      </button>
    </div>
  )
}
