import React from 'react'
import ExpenseRow from './ExpenseRow'
import { HiPlusCircle, HiSave } from 'react-icons/hi';

export default function Expence({expenses, expenceType, handleInputChange, handleRemoveInput, totalExpenses, handleAddInput, handleSaveData}) {
    // Date relate
    const date = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const currentDate = date.toLocaleString('en-US', options);
  return (
    <div className='container_layout2'>
      {/* Header */}
      <div className='flex items-center space-x-6 text-xl font-bold md:text-3xl'>
        <h1>Balance Inquiry.</h1>
        <h1 className='input_layout2 w-fit text-center'>{currentDate}</h1>
      </div>
      {/* Costing and liability */}
      <div className='modal_body_element space-y-2'>
        <h1 className='text-sm text-center text-gray-500 dark:text-gray-300'>Expenditures Breakdown.</h1>
        {expenses.map((expense, index) => (
          <ExpenseRow
            key={index}
            index={index}
            type={expenceType}
            description={expense.description}
            amount={expense.amount}
            onChange={handleInputChange}
            onRemove={handleRemoveInput}
          />
        ))}
      </div>
      <div className='modal_body_element flex items-center justify-end space-x-3'>
        <span className='input_layout2 w-28 text-center'>{totalExpenses}</span>
        <button className="btn_layout_text" onClick={handleAddInput}>
          <span className="btn_text"><HiPlusCircle size={22}/> <span>Add</span> </span>
        </button>
        <button className="btn_layout_text" onClick={handleSaveData}>
          <span className="btn_text"><HiSave size={22}/> <span>Save</span> </span>
        </button>
      </div>
    </div>
  )
}
