'use client'
import { useState } from 'react';
import ExpenseRow from '@/components/finance/ExpenseRow';
import Report from '@/components/finance/Report';
import Summary from '@/components/finance/Summary';
import { HiPlusCircle, HiSave } from 'react-icons/hi';
import ExpenceCategory from '@/components/finance/ExpenceCategory';

export default function Finance() {
  // Date relate
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);
  // Calculation related
  const expenceCategory = [
    {value:'Food',},
    {value:'Labor',},
    {value:'Rent',},
    {value:'Utilities',},
    {value:'Advertising',},
    {value:'Equipment',},
    {value:'Owner'},]
  const [expenses, setExpenses] = useState([{ category: expenceCategory, description: '', amount: '' },]);
  const [opening, setOpening] = useState(100);
  const [invest, setInvest] = useState(0);
  const [dailySales, setDailySales] = useState(50);
  const [closing, setClosing] = useState(opening + dailySales);
  const [totalExpenses, setTotalExpenses] = useState(0)
  // Operational functions
  const handleInputChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };
  const handleAddInput = () => {
    const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpenses(total);
    setExpenses([...expenses, { category: 'Food', description: '', amount: '' }]);
  };
  const handleRemoveInput = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };
  const handleSaveData = () => {
    const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpenses(total);
    setClosing(opening + invest + dailySales - total);
  };
  const handleInvest = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setInvest(value);
      setClosing(opening + value + dailySales - totalExpenses);
    } if (value === 0 || value === 'e') {
      setInvest('');
    }
  };
  return (
    <div className='container_gap'>
      <div className='flex flex-col-reverse lg:grid grid-cols-4 gap-6 w-full'>
        <div className='lg:col-span-3 space-y-6'>
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
                  category={expenceCategory}
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
          <div>
            <Report/>
          </div>
        </div>
        <div className='space-y-6'>
          <Summary opening={opening} invest={invest} handleInvest={handleInvest} dailySales={dailySales} closing={closing}/>
          <ExpenceCategory/>
        </div>
      </div>
    </div>
  )
}
