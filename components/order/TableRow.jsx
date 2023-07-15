'use client'
import React, { useState } from 'react';
import {BiLeftArrow} from 'react-icons/bi';

export default function TableRow({index, row, Orders}) {
    const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <tr className={` ${index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-900' : 'bg-gray-300 dark:bg-gray-700'} h-10`}>
          <td className={`${index === Orders.length - 1 && 'rounded-bl-lg'} pl-2`}>{row.id}</td>
          <td>{row.table}</td>
          <td>{row.status}</td>
          <td>{row.waiter}</td>
          <td>{row.time}</td>
          <td>{row.amount}</td>
          <td className={`${index === Orders.length - 1 && 'rounded-br-lg'} pr-2`}>
              <button 
                onClick={()=>setIsExpand((p)=>!p)}
                className={`${isExpand && '-rotate-90'} transition duration-200`}
                >
                <BiLeftArrow/>
              </button>
          </td>
      </tr>
      {isExpand && (
      <tr className={`h-fit bg-gray-100 dark:bg-gray-950`}>
        <td colSpan={6} className="w-full p-2 text-right">
          {row.items.map((item, itemIndex) => (
            <div key={itemIndex} className="mr-2">
              <span>{item}</span> <span> {itemIndex + 1}</span>
            </div>
          ))}
        </td>
      </tr>
      )}
    </>
  )
}
