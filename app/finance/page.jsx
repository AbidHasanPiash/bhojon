import ExpenseRow from '@/components/finance/ExpenseRow';
import { HiPlusCircle, HiSave } from 'react-icons/hi';

export default function Finance() {
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);
  let opening = 24850;
  let dailySales = 52865;
  let closing = 24850;
  return (
    <div className='container_gap'>
      <div className='flex flex-col-reverse lg:grid grid-cols-4 gap-6 w-full'>
        <div className='container_layout lg:col-span-3'>
          {/* Header */}
          <div className='flex items-center space-x-6 text-xl font-bold md:text-3xl'>
            <h1>Today's Balance Inquiry.</h1>
            <h1 className='input_layout2 w-28 text-center'>{currentDate}</h1>
          </div>
          {/* Costing and liability */}
          <div className='modal_body_element space-y-2'>
            <h1 className='text-sm text-center text-gray-500 dark:text-gray-300'>Expenditures Breakdown.</h1>
            <ExpenseRow/>
            <ExpenseRow/>
            <ExpenseRow/>
            <ExpenseRow/>
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
        <div className='container_layout space-y-6'>
          <h1 className='text-xl font-bold md:text-3xl'>Balance Summary.</h1>
          <div className='grid lg:grid-cols-1 grid-cols-2 gap-3'>
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
      </div>
    </div>
  )
}
