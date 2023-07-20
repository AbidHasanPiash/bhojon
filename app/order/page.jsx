'use client'
import React, { useState } from 'react';
import {MdDeliveryDining, MdAccessTimeFilled, MdOutlineRestaurantMenu} from 'react-icons/md';
import {BsBookmarkStarFill} from 'react-icons/bs';
import TableRow from '@/components/order/TableRow';

export default function Order() {
  const [Orders, setOrders] = useState([
    {id:1, table:3, status: 'active', waiter:'John', time:'11:24 AM', amount:350, items:['Bruschetta', 'Caprese Salad', 'Chicken Wings']},
    {id:2, table:5, status: 'complete', waiter:'Walle', time:'11:00 AM', amount:465, items:['Grilled Salmon', 'dring']},
    {id:3, table:1, status: 'active', waiter:'John', time:'10:30 AM', amount:180, items:['chicken', 'dring', 'Grilled Salmon']},
    {id:4, table:7, status: 'complete', waiter:'Mike', time:'10:12 AM', amount:290, items:['Chocolate Cake', 'Bruschetta']},
    {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'active', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:5, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
    {id:55, table:10, status: 'complete', waiter:'Jack', time:'09:45 AM', amount:340, items:['Tiramisu', 'dring']},
  ])
  return (
    <section>
      {/* Heading Section */}
      <div className='container_gap'>
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Order summary */}
          <div className="lg:col-span-2 grid gap-6 grid-cols-2">
            <div className='order_card'>
              <div>
                <h1 className='text-xl font-bold md:text-3xl mb-3'>Order</h1>
                <span><MdOutlineRestaurantMenu size={40}/></span>
              </div>
              <h1 className='text-5xl lg:text-8xl font-extrabold'>7</h1>
            </div>
            <div className='order_card'>
              <div>
                <h1 className='text-xl font-bold md:text-3xl mb-3'>Delivery</h1>
                <span><MdDeliveryDining size={40}/></span>
              </div>
              <h1 className='text-5xl lg:text-8xl font-extrabold'>2</h1>
            </div>
            <div className='order_card'>
              <div>
                <h1 className='text-xl font-bold md:text-3xl mb-3'>Pending</h1>
                <span><MdAccessTimeFilled size={38}/></span>
              </div>
              <h1 className='text-5xl lg:text-8xl font-extrabold'>3</h1>
            </div>
            <div className='order_card'>
              <div>
                <h1 className='text-xl font-bold md:text-3xl mb-3'>Booked</h1>
                <span><BsBookmarkStarFill size={35}/></span>
              </div>
              <h1 className='text-5xl lg:text-8xl font-extrabold'>1</h1>
            </div>
          </div>
          {/* Virtual Table */}
          <div className='lg:col-span-2 space-y-6 group container_layout'>
            <div className='flex items-center justify-between text-xl'>
              <h1 className='text-xl font-bold md:text-3xl'>Table setup</h1>
              <div className='flex items-center space-x-5'>
                <span><span className='text-3xl text-rose-300 dark:text-rose-700'>●</span> 5 </span>
                <span><span className='text-3xl text-orange-300 dark:text-orange-700'>●</span> 1 </span>
                <span><span className='text-3xl text-cyan-300 dark:text-cyan-700'>●</span> 4 </span>
              </div>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-3'>
              <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>1</span></div>
                <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
              </div>
              <div className='h-20 rounded-lg bg-orange-200 dark:bg-orange-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>2</span></div>
                <div className='h-1/3 bg-orange-300 dark:bg-orange-700 rounded px-4 py-1 text-center text-xs'>Booked</div>
              </div>
              <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>3</span></div>
                <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
              </div>
              <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>4</span></div>
                <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
              </div>
              <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>5</span></div>
                <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
              </div>
              <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>6</span></div>
                <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
              </div>
              <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>7</span></div>
                <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
              </div>
              <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>8</span></div>
                <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
              </div>
              <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>9</span></div>
                <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
              </div>
              <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                <div className='h-2/3 text-3xl flex items-center justify-center'><span>10</span></div>
                <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* all order list */}
      <div className='container_gap'>
        <div className='container_layout space-y-6'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-xl font-bold md:text-3xl'>Monthly Order Summary</h1>
            <h1 className='text-xl'>Today</h1>
          </div>
          <table class="table-fixed w-full">
            <thead>
              <tr className='bg-blue-200 dark:bg-blue-950'>
                <th className='py-2 text-left pl-2 rounded-tl-lg'>ID</th>
                <th className='py-2 text-left'>Table</th>
                <th className='py-2 text-left'>Status</th>
                <th className='py-2 text-left'>Waiter</th>
                <th className='py-2 text-left'>Time</th>
                <th className='py-2 text-left'>Amount</th>
                <th className='py-2 text-left rounded-tr-lg w-5'></th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((order, index)=>(
                <TableRow key={index} index={index} row={order} Orders={Orders}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
