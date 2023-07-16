'use client'
import { useEffect, useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi';

export default function Finance() {
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);
  let opening = 24850;
  let dailySales = 52865;
  let clossing = 24850;
  return (
    <div className='container_gap'>
      <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6'>
        <div className='container_layout'>
          {/* Header */}
          <div className='flex items-center space-x-6 text-xl font-bold md:text-3xl'>
            <h1>Today's Balance Inquiry.</h1>
            <h1 className='input_layout2 w-28 text-center'>{currentDate}</h1>
          </div>
          {/* Assets section */}
          <div className='modal_body_element'>
            <h1 className='text-sm text-center pb-3 text-gray-500 dark:text-gray-300'>Income and Expenditure Summary.</h1>
            <div className='grid xl:grid-cols-2 gap-6'>
              <div className='flex items-center justify-between space-x-6'>
                <p>Opening :</p>
                <p className='input_layout2 w-28'>{opening}</p>
              </div>
              <div className='flex items-center justify-between space-x-6'>
                <p>Clossing :</p>
                <p className='input_layout2 w-28'>{clossing}</p>
              </div>
              <div className='flex items-center justify-between space-x-6'>
                <p>Invest :</p>
                <input type="number" placeholder='cash' className='input_layout2 w-28' />
              </div>
              <div className='flex items-center justify-between space-x-6'>
                <p>Daily Sales :</p>
                <p className='input_layout2 w-28'>{dailySales}</p>
              </div>
            </div>
          </div>
          {/* Costing and liability */}
          <div className='modal_body_element'>
            <h1 className='text-sm text-center pb-3 text-gray-500 dark:text-gray-300'>Expenditures Breakdown.</h1>
            <div className='flex items-center space-x-3'>
              <p className='input_layout2 w-16 text-center'>1</p>
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
              <button className="btn_layout_icon">
                <span className="btn_icon px-4"><HiPlusCircle size={22}/></span>
              </button>
            </div>
          </div>
        </div>
        <div className='container_layout'>
          table
        </div>
      </div>
    </div>
  )
}
