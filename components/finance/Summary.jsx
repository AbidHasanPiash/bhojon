import React from 'react'

export default function Summary({opening, invest, handleInvest, dailySales, closing}) {
  return (
    <div className='container_layout2 space-y-6'>
      <h1 className='text-xl font-bold md:text-3xl'>Summary.</h1>
      <div className='grid lg:grid-cols-1 grid-cols-2 gap-3'>
        <div>
          <p className='p-1'>Opening</p>
          <p className='input_layout'>{opening}</p>
        </div>
        <div>
          <p className='p-1'>Invest</p>
          <input 
            type="number" 
            placeholder='Invest' 
            value={invest}
            onChange={handleInvest} 
            className='input_layout' 
          />
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
  )
}
