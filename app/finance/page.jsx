import React from 'react'

export default function Finance() {
  const date = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);
  return (
    <div className='container_gap'>
      <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6'>
        <div className='container_layout'>
          table
        </div>
        <div className='container_layout'>
          <div className="flex items-center space-x-6 text-xl font-bold md:text-3xl">
            <h1>Today's Balance Inquiry.</h1>
            <h1 className='input_layout2 w-28 text-center'>{currentDate}</h1>
          </div>
          <div className='modal_body_element'>
            <div className='flex items-center space-x-6'>
              <p>Opening : </p>
              <p className='input_layout2'>24850</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
