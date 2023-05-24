'use client'
import {useContext} from 'react'
import { SidebarContext } from '@/context/SidebarContext'

// React Icons
import {HiBell, HiMenuAlt2} from 'react-icons/hi'
import {TbMessage2} from 'react-icons/tb'

export default function Header() {
  const {isSidebarOpen, setSidebarOpen} = useContext(SidebarContext);
  return (
    <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
      <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
        <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
        <button onClick={()=>setSidebarOpen((p)=>!p)} className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
          <span className="my-auto h-6 w-6"><HiMenuAlt2 size={22}/></span>
        </button>
        <div className="flex space-x-4">
          {/* Search feature is disable */}
          {/* <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 fill-current"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
          </div> */}
          {/* <button
            aria-label="search"
            className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              ></path>
            </svg>
          </button> */}
          <button
            aria-label="chat"
            className="h-10 w-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white"><TbMessage2 size={22}/></span>
          </button>
          <button
            aria-label="notification"
            className="h-10 w-10 rounded-xl border flex items-center justify-center bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white"><HiBell size={22}/></span>
          </button>
        </div>
      </div>
    </div>
  )
}
