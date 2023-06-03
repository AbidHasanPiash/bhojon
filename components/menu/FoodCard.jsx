'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiPencilAlt, HiTrash } from 'react-icons/hi'

export default function FoodCard({item, category, deleteItem, editItem}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className='group-hover:absolute top-0 p-3 w-full h-full group-hover:flex justify-between group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300'>
        <button
          aria-label="edit"
          onClick={() => editItem(category, item.name)}
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
    </div>
  )
}
