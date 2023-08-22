'use client'
import React, { useEffect, useState } from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import { TbSquareRoundedCheckFilled } from 'react-icons/tb'
import Table from './Table'

export default function VirtualTables() {
    const [tables, setTables] = useState([
        {id: 1, status:'full'},
        {id: 2, status:'booked'},
        {id: 3, status:'full'},
        {id: 4, status:'free'},
        {id: 5, status:'full'},
        {id: 6, status:'free'},
        {id: 7, status:'full'},
        {id: 8, status:'free'},
        {id: 9, status:'free'},
    ])
    const [totalFullTable, setTotalFullTable] = useState(0);
    const [totalFreeTable, setTotalFreeTable] = useState(0);
    const [totalBookedTable, setTotalBookedTable] = useState(0);

    useEffect(() => {
      const fullCount = tables.filter(table => table.status === 'full').length;
      const freeCount = tables.filter(table => table.status === 'free').length;
      const bookedCount = tables.filter(table => table.status === 'booked').length;
      setTotalFullTable(fullCount);
      setTotalFreeTable(freeCount);
      setTotalBookedTable(bookedCount);
    }, [tables]);
    const handleDelete = () => {
        //delete
    }
    const handleAdd = () => {
        //add
    }
    return (
        <div className='lg:col-span-2 space-y-6 container_layout'>
            <div className='flex items-center justify-between text-xl'>
                <h1 className='text-xl font-bold md:text-3xl'>Table setup</h1>
                <div className='flex items-center space-x-5'>
                    <span className='flex items-center justify-center space-x-2'>
                        <span className='text-rose-300 dark:text-rose-600'><TbSquareRoundedCheckFilled/></span> 
                        <span>{totalFullTable}</span>
                    </span>
                    <span className='flex items-center justify-center space-x-2'>
                        <span className='text-yellow-300 dark:text-yellow-600'><TbSquareRoundedCheckFilled/></span> 
                        <span>{totalBookedTable}</span>
                    </span>
                    <span className='flex items-center justify-center space-x-2'>
                        <span className='text-cyan-300 dark:text-cyan-600'><TbSquareRoundedCheckFilled/></span> 
                        <span>{totalFreeTable}</span>
                    </span>
                </div>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-3'>
                {tables.map((table, index)=>(
                    <Table key={index} index={index} status={table.status}/>
                ))}
                <button className='h-20 rounded-lg outline-dashed outline-cyan-300 dark:outline-cyan-700 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center text-cyan-300 dark:text-cyan-700'><HiPlusCircle/></div>
                    <div className='h-1/3 rounded-lg bg-cyan-500 bg-opacity-20 outline-dashed outline-cyan-300 dark:outline-cyan-700 px-4 py-1 text-center text-xs'>New</div>
                </button>
            </div>
        </div>
    )
}
