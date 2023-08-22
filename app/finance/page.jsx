'use client'
import { useState } from 'react';
import ExpenseRow from '@/components/finance/ExpenseRow';
import Report from '@/components/finance/Report';
import Summary from '@/components/finance/Summary';
import { HiPlusCircle, HiSave } from 'react-icons/hi';
import ExpenceType from '@/components/finance/ExpenceType';
import Expence from '@/components/finance/Expence';

export default function Finance() {
  const [opening, setOpening] = useState(100);
  const [invest, setInvest] = useState(0);
  const [dailySales, setDailySales] = useState(50);
  const [closing, setClosing] = useState(opening + dailySales);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expenceType, setExpenceType] = useState([
    {value:'Food',},
    {value:'Labor',},
    {value:'Rent',},
    {value:'Utilities',},
    {value:'Advertising',},
    {value:'Equipment',},
    {value:'Owner'},]);
  const [expenses, setExpenses] = useState([
    { type: expenceType, description: '', amount: '' },]);
  // Operational functions
  const handleInputChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };
  const handleAddInput = () => {
    const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpenses(total);
    setExpenses([...expenses, { type: '', description: '', amount: '' }]);
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
  const handleAddExpenceType = (value) => {
    setExpenceType([...expenceType, { value: value }]);
  };
  const handleRemoveExpenceType = (index) => {
    if (index !== 0) {
      const newType = [...expenceType];
      newType.splice(index, 1);
      setExpenceType(newType);
    }
  };
  return (
    <div className='container_gap'>
      <div className='flex flex-col-reverse lg:grid grid-cols-4 gap-6 w-full'>
        <div className='lg:col-span-3 space-y-6'>
          <Expence 
            expenses={expenses} 
            expenceType = {expenceType}
            handleInputChange = {handleInputChange}
            handleRemoveInput = {handleRemoveInput}
            totalExpenses = {totalExpenses}
            handleAddInput = {handleAddInput}
            handleSaveData = {handleSaveData}
          />
          <Report/>
        </div>
        <div className='space-y-6'>
          <Summary 
            opening={opening} 
            invest={invest} 
            handleInvest={handleInvest} 
            dailySales={dailySales} 
            closing={closing}/>
          <ExpenceType 
            values= {expenceType}
            onRemove= {handleRemoveExpenceType}
            setValues={handleAddExpenceType}/>
        </div>
      </div>
    </div>
  )
}
