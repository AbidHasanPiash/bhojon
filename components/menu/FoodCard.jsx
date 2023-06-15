'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { ImCross } from 'react-icons/im';
import { TbPhotoEdit } from 'react-icons/tb';

export default function FoodCard({item, category, deleteItem, editItem}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    id: item.id,
    name: item.name,
    price: item.price,
    size: item.size
  });
  return (
    <div className="group relative h-60 rounded-2xl overflow-hidden">
      <Image
        className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-300"
        src={item.image ? item.image : '/images/user.jpg'}
        alt="food"
        loading="lazy"
        width="200"
        height="200"
      />
      <div className='absolute top-0 p-3 w-full h-full flex justify-between group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300'>
        <button
          aria-label="edit"
          onClick={() => setIsModalOpen(true) /*editItem(category, item.name)*/}
          className="h-10 w-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
        >
          <span className="text-gray-600 dark:text-gray-300 hover:text-blue-500"><HiPencilAlt size={22}/></span>
        </button>
        <button
          aria-label="delete"
          onClick={() => deleteItem(category, item.name)}
          className="h-10 w-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
        >
          <span className="text-gray-600 dark:text-gray-300 hover:text-red-500"><HiTrash size={22}/></span>
        </button>
      </div>
      <div className="absolute bottom-0 inset-0 h-20 group-hover:h-40 mt-auto bg-gray-200 dark:bg-gray-900 transition-all duration-300">
        <div className='h-20 p-2 flex flex-col justify-between'>
          <h4 className="text-lg leading-none line-clamp-2 font-semibold text-gray-700 dark:text-white">{item?.name}</h4>
          <div className='flex items-center justify-between'>
            <span className="text-gray-800 dark:text-gray-300">{item?.size}</span>
            <span className="text-gray-800 dark:text-gray-300">$ {item?.price}</span>
          </div>
        </div>
        <div className='px-3 w-full'>
          <table className='table-auto w-full text-gray-800 dark:text-gray-300'>
            <caption className="caption-top text-xs">
              Order statistics
            </caption>
            <tbody>
              <tr><td>Today</td><td className='text-right'>{item.orderToday ? item.orderToday : '0'}</td></tr>
              <tr><td>week</td><td className='text-right'>{item.orderWeek ? item.orderWeek : '0'}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 
      *
      *
      Modal for edit 
      *
      *
      */}
      <div className={`${isModalOpen ? 'fixed':'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full z-30`}>
        <div className="w-fit h-fit space-y-3 mx-6 p-4 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          {/* Modal Header */}
          <div className='w-full flex items-center justify-between'>
            <h1><span className='text-xl md:text-2xl'>{category}/</span> <span className='md:text-xl'>{item.name}</span></h1>
            <button
              onClick={()=>setIsModalOpen(false)}
              aria-label="Close Nav"
              className="h-10 w-10 flex items-center justify-center rounded-xl border text-gray-900 dark:text-gray-200 bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
            >
              <ImCross/>
            </button>
          </div>
          {/* Body Section */}
          <div className='flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-3 md:space-y-0'>
            {/* Image Section */}
            <div className='relative w-60 h-60'>
              <Image
                className="w-full h-full object-cover rounded outline-dashed outline-2 outline-blue-500 p-2"
                src={item.image ? item.image : '/images/user.jpg'}
                alt="food"
                loading="lazy"
                width="200"
                height="200"
              />
              <button
                aria-label="change Image"
                className="absolute -top-2 -right-2 h-10 w-10 flex items-center justify-center rounded-xl border text-gray-900 dark:text-gray-200 bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <TbPhotoEdit size={25}/>
              </button>
            </div>
            {/* Edit Data */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Item Name"
                value={updatedItem.name}
                onChange={(e)=>setUpdatedItem((prevItem) => ({
                  ...prevItem,
                  name: e.target.value
                }))}
                className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
              />
              <div className="flex space-x-2">
                <input
                  type="number"
                  step="0.01"
                  placeholder="Item Price"
                  value={updatedItem.price}
                  onChange={(e)=>setUpdatedItem((prevItem) => ({
                    ...prevItem,
                    price: e.target.value
                  }))}
                  className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
                />
                <input
                  type="text"
                  placeholder="Item Size"
                  value={updatedItem.size}
                  onChange={(e)=>setUpdatedItem((prevItem) => ({
                    ...prevItem,
                    size: e.target.value
                  }))}
                  className="outline-none w-full rounded-xl border border-gray-300 p-2.5 text-sm transition focus:border-cyan-300 duration-300 dark:bg-gray-900 dark:border-gray-700"
                />
              </div>
            </div>
          </div>
          {/* Save Button */}
          <div className='flex items-end justify-end'>
            <button
              onClick={()=>{setIsModalOpen(false); editItem(category, updatedItem);}}
              aria-label="Close Nav"
              className="h-10 px-2 flex items-center justify-center rounded-xl border text-gray-900 dark:text-gray-200 bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
            >
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
