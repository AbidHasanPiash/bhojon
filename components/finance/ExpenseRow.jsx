import React from 'react'

export default function ExpenseRow() {
  return (
    <div className='flex items-center space-x-2'>
      <p className='input_layout2 w-12 text-center'>1</p>
      <select className='select_layout'>
        <option value="1">Food</option>
        <option value="1">Labor</option>
        <option value="1">Rent</option>
        <option value="1">Utilities</option>
        <option value="1">Advertising</option>
        <option value="1">Equipment</option>
        <option value="1">Owner</option>
      </select>
      <input type="text" placeholder='Explain in short' className='input_layout' />
      <input type="number" placeholder='amount' className='input_layout2 w-24' />
    </div>
  )
}
