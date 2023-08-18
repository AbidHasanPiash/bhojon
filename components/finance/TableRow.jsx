'use client'
import React, { useState } from 'react';
import {HiEye, HiPencilAlt, HiDocumentDownload} from 'react-icons/hi';

export default function TableRow({index, row, Orders}) {
    const [isExpand, setIsExpand] = useState(false);
  return (
    <tr className={` ${index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-900' : 'bg-gray-300 dark:bg-gray-700'} h-10`}>
        <td className={`${index === Orders.length - 1 && 'rounded-bl-lg'} pl-2`}>{row.id}</td>
        <td>{row.table}</td>
        <td>{row.status}</td>
        <td>{row.waiter}</td>
        <td>{row.time}</td>
        <td>{row.amount}</td>
        <td>{row.amount}</td>
        <td className={`${index === Orders.length - 1 && 'rounded-br-lg'} pr-2 space-x-3 text-justify`}>
            <button onClick={()=>setIsExpand((p)=>!p)} className={`${isExpand && '-rotate-90'} transition duration-200`}>
              <HiEye size={20}/>
            </button>
            <button onClick={()=>setIsExpand((p)=>!p)} className={`${isExpand && '-rotate-90'} transition duration-200`}>
              <HiPencilAlt size={20}/>
            </button>
            <button onClick={()=>setIsExpand((p)=>!p)} className={`${isExpand && '-rotate-90'} transition duration-200`}>
              <HiDocumentDownload size={20}/>
            </button>
        </td>
    </tr>
  )
}
