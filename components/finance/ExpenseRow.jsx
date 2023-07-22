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
        value={category}
        onChange={(e) => onChange(index, 'category', e.target.value)}
      >
        <option value="Food">Food</option>
        <option value="Labor">Labor</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Advertising">Advertising</option>
        <option value="Equipment">Equipment</option>
        <option value="Owner">Owner</option>
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
        onChange={handleAmountChange}
      />
      <button className="btn_layout_icon" onClick={() => onRemove(index)}>
        <span className="btn_icon px-2"><HiTrash size={22}/></span>
      </button>
    </div>
  )
}
