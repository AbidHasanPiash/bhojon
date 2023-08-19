'use client'
import React, { useState } from 'react';
import {HiEye, HiPencilAlt, HiDocumentDownload} from 'react-icons/hi';

export default function TableRow({index, row, reports}) {
    const [isExpand, setIsExpand] = useState(false);
  return (
    <tr className={` ${index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-900' : 'bg-gray-300 dark:bg-gray-700'} h-10`}>
        <td className={`${index === reports.length - 1 && 'rounded-bl-lg'} pl-2`}>{row.id}</td>
        <td>{row.date}</td>
        <td>{row.opening}</td>
        <td>{row.sales}</td>
        <td>{row.expence}</td>
        <td>{row.closing}</td>
        <td>{row.remarks}</td>
        <td className={`${index === reports.length - 1 && 'rounded-br-lg'} pr-2 h-10 w-full flex items-center justify-between`}>
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
