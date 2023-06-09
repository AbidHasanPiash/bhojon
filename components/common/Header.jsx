'use client'
import {useContext} from 'react'
import { SidebarContext } from '@/context/SidebarContext'

// React Icons
import {HiBell, HiMenuAlt2} from 'react-icons/hi'
import {TbMessage2} from 'react-icons/tb'

export default function Header() {
  const {isSidebarOpen, setSidebarOpen} = useContext(SidebarContext);
  return (
    <div className="z-20 sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
      <div className="flex items-center justify-between space-x-4 px-6">
        <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
        <button onClick={()=>setSidebarOpen((p)=>!p)} className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
          <span className="my-auto h-6 w-6"><HiMenuAlt2 size={22}/></span>
        </button>
        <div className="flex space-x-4">
          <button className="btn_layout_icon" >
            <span className="btn_icon"><TbMessage2 size={22}/></span>
          </button>
          <button className="btn_layout_icon" >
            <span className="btn_icon"><HiBell size={22}/></span>
          </button>
        </div>
      </div>
    </div>
  )
}
