'use client'
import {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarContext } from '@/context/SidebarContext'

// Icons
import {HiOutlineLogout} from 'react-icons/hi'
import {ImCross} from 'react-icons/im'
import DashboardSVG from './svg/DashboardSVG'
import MenuSVG from './svg/MenuSVG'
import OrderSVG from './svg/OrderSVG'
import FinanceSVG from './svg/FinanceSVG'
import EmployeeSVG from './svg/EmployeeSVG'

export default function nav() {
  const {isSidebarOpen, setSidebarOpen} = useContext(SidebarContext);
  return (
    <nav className={`fixed top-0 z-10 ${isSidebarOpen?'ml-[0%]':'ml-[-100%]'} flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition-all duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700`}>
      <div>
        <div className="-mx-6 px-6 py-4 flex justify-between">
          <Link href="#" title="home">
            <h1 className="w-32 text-3xl text-gray-200">Bhojon.</h1>
          </Link>
          <button
            onClick={()=>setSidebarOpen((p)=>!p)}
            aria-label="Close Nav"
            className="h-10 w-10 flex items-center justify-center rounded-xl border lg:hidden text-gray-900 dark:text-gray-200 bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <ImCross/>
          </button>
        </div>

        <div className="mt-8 text-center">
          <Image
            src="/images/user.jpg" width={100} height={100}
            alt=""
            className="m-auto h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
          />
          <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">Cynthia J. Watts</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="mt-8 space-y-2 tracking-wide">
          <li>
            <Link
              href="#"
              aria-label="dashboard"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 active:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <DashboardSVG/>
              <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 active:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <MenuSVG/>
              <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Menu</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 active:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <OrderSVG/>
              <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Order</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 active:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <FinanceSVG/>
              <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Finance</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300 active:bg-gradient-to-r from-sky-600 to-cyan-400"
            >
              <EmployeeSVG/>
              <span className="group-hover:text-gray-700 dark:group-hover:text-white">Employee</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
        <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
          <span className="group-hover:text-gray-700 dark:group-hover:text-white"><HiOutlineLogout size={22}/></span>
          <span className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
        </button>
      </div>
    </nav>
  )
}
