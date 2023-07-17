'use client'
import { useState } from 'react';
import { HiPlusCircle, HiSave, HiDocumentSearch } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';

export default function Finance() {
  const [searchShow, setSearchShow] = useState(false);
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);
  let opening = 24850;
  let dailySales = 52865;
  let closing = 24850;
  return (
    <div>
      {/* Heading for mobile vew */}
      <div className="sticky px-10 pt-6 flex items-center justify-between lg:hidden">
        <h5 className="text-2xl font-medium text-gray-600 dark:text-white">Finance</h5>
        <button onClick={()=>setSearchShow((p)=>!p)} className="btn_layout_text" >
          <span className="btn_text"> <HiDocumentSearch size={22}/> <span>Search</span></span>
        </button>
      </div>
      <div className='container_gap lg:grid grid-cols-4 gap-6 w-full'>
        <div className='container_layout lg:col-span-3'>
          {/* Header */}
          <div className='flex items-center space-x-6 text-xl font-bold md:text-3xl'>
            <h1>Today's Balance Inquiry.</h1>
            <h1 className='input_layout2 w-28 text-center'>{currentDate}</h1>
          </div>
          {/* Assets section */}
          <div className='modal_body_element'>
            <h1 className='text-sm text-center pb-3 text-gray-500 dark:text-gray-300'>Income and Expenditure Summary.</h1>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-3'>
              <div>
                <p className='p-1'>Opening</p>
                <p className='input_layout'>{opening}</p>
              </div>
              <div>
                <p className='p-1'>Invest</p>
                <input type="number" placeholder='cash' className='input_layout' />
              </div>
              <div>
                <p className='p-1'>Daily Sales</p>
                <p className='input_layout'>{dailySales}</p>
              </div>
              <div>
                <p className='p-1'>Closing</p>
                <p className='input_layout'>{closing}</p>
              </div>
            </div>
          </div>
          {/* Costing and liability */}
          <div className='modal_body_element'>
            <h1 className='text-sm text-center pb-3 text-gray-500 dark:text-gray-300'>Expenditures Breakdown.</h1>
            <div className='flex items-center space-x-3'>
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
          </div>
          <div className='modal_body_element flex items-center justify-end space-x-3'>
            <button className="btn_layout_text">
              <span className="btn_text"><HiPlusCircle size={22}/> <span>Add</span> </span>
            </button>
            <button className="btn_layout_text">
              <span className="btn_text"><HiSave size={22}/> <span>Save</span> </span>
            </button>
          </div>
        </div>
        <div className={`${searchShow?'modal_container':'hidden lg:block h-fit sticky top-[88px]'}`}>
          <div className="modal_body">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold md:text-4xl text-center">Search</h1>
              <button onClick={()=>setSearchShow((p)=>!p)} className="btn_layout_icon lg:hidden">
                <span className="btn_icon"><ImCross/></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
