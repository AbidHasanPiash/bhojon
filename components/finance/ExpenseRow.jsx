import React from 'react'
import { HiTrash } from 'react-icons/hi'

export default function ExpenseRow({ index, category, description, amount, onChange, onRemove }) {
  const handleAmountChange = (e) => {
    onChange(index, 'amount', e.target.value);
  };
  return (
    <div className='flex items-center space-x-2'>
      <p className='input_layout2 w-12 text-center'>{index + 1}</p>
      <select
        className='select_layout'
        value={category.value}
        onChange={(e) => onChange(index, 'category', e.target.value)}
      >
        {category.map((cat, i)=>(
          <option key={i} value={cat.value}>{cat.value}</option>
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
