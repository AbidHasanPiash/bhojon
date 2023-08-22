import React from 'react'
import OrderReportRow from './OrderReportRow'

export default function OrderReport({Orders}) {
  return (
    <div className='container_gap'>
        <div className='container_layout space-y-6'>
            <div className='w-full flex items-center justify-between'>
            <h1 className='text-xl font-bold md:text-3xl'>Monthly Order Summary</h1>
            <h1 className='text-xl'>Today</h1>
            </div>
            <table class="table-fixed w-full">
            <thead>
                <tr className='bg-cyan-200 dark:bg-cyan-800'>
                <th className='py-2 text-left pl-2 rounded-tl-lg'>ID</th>
                <th className='py-2 text-left'>Table</th>
                <th className='py-2 text-left'>Status</th>
                <th className='py-2 text-left'>Waiter</th>
                <th className='py-2 text-left'>Time</th>
                <th className='py-2 text-left'>Amount</th>
                <th className='py-2 text-left rounded-tr-lg'> Action</th>
                </tr>
            </thead>
            <tbody>
                {Orders.map((order, index)=>(
                    <OrderReportRow key={index} index={index} row={order} Orders={Orders}/>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}
