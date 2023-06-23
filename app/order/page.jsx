'use client'
import React from 'react';
import {MdDeliveryDining, MdAccessTimeFilled, MdOutlineRestaurantMenu} from 'react-icons/md';
import {BsBookmarkStarFill} from 'react-icons/bs';

export default function Order() {
  return (
    <section>
      <div className="px-6 pt-6">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className='flex items-center justify-between p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
            <div>
              <h1 className='text-2xl xl:text-3xl font-bold mb-3'>Order</h1>
              <span><MdOutlineRestaurantMenu size={40}/></span>
            </div>
            <h1 className='text-8xl font-extrabold'>7</h1>
          </div>
          <div className='flex items-center justify-between p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
            <div>
              <h1 className='text-2xl xl:text-3xl font-bold mb-3'>Delivery</h1>
              <span><MdDeliveryDining size={40}/></span>
            </div>
            <h1 className='text-8xl font-extrabold'>2</h1>
          </div>
          <div className='flex items-center justify-between p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
            <div>
              <h1 className='text-2xl xl:text-3xl font-bold mb-3'>Pending</h1>
              <span><MdAccessTimeFilled size={38}/></span>
            </div>
            <h1 className='text-8xl font-extrabold'>3</h1>
          </div>
          <div className='flex items-center justify-between p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
            <div>
              <h1 className='text-2xl xl:text-3xl font-bold mb-3'>Booked</h1>
              <span><BsBookmarkStarFill size={35}/></span>
            </div>
            <h1 className='text-8xl font-extrabold'>1</h1>
          </div>
        </div>
      </div>
      <div className='px-6 pt-6'>
        <div className="grid gap-6 lg:grid-cols-5">
          <div className='lg:col-span-2 h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
            <div className='flex items-center justify-between text-xl'>
              <h1>Table setup</h1>
              <div className='flex items-center space-x-5'>
                <span><span className='text-2xl text-rose-300 dark:text-rose-700'>●</span> 5 </span>
                <span><span className='text-2xl text-orange-300 dark:text-orange-700'>●</span> 1 </span>
                <span><span className='text-2xl text-cyan-300 dark:text-cyan-700'>●</span> 4 </span>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
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
          <div className='lg:col-span-3 h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
            <div>
              <h1 className='text-xl'>Order Summary</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
