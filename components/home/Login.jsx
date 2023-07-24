import React from 'react'
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";

export default function Login() {
  return (
    <section className="container_gap h-screen">
      <div className='fixed top-0 left-0 right-0 w-full h-20 bg-black'>
        <Link href={'/dashboard'}>dashboard</Link>
      </div>
      <div className='h-5/6 grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
        <div className='h-full flex flex-col items-start justify-center'>
          <h1 className="text-6xl lg:text-8xl font-bold still_gradient">
            <span>Resto Man</span>
            <span className='text-cyan-700 dark:text-cyan-400'>.</span>
          </h1>
          <p className='text-xl lg:text-2xl tracking-widest lg:tracking-[5px] pl-1 lg:pl-2'>Your Digital Restaurant Solution</p>

        </div>
        <div className='flex items-center justify-center md:mx-6 lg:mx-12'>
          <div className='flex flex-col items-center'>
            <div className='rounded-3xl shadow-2xl shadow-cyan-700'>
              <div className="container_layout2 w-full z-10">
                <div className='flex items-center justify-center'>
                  <div className='-mt-20 flex items-center justify-center w-20 h-20 input_layout2'>
                    <span className='text-6xl text-cyan-700 dark:text-cyan-400'>
                      <BiUserCircle/>
                    </span>
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='text-center space-y-3 mb-3'>
                    <h1 className='text-xl lg:text-3xl font-bold'>Agent Login</h1>
                    <p className='text-xs lg:text-sm font-thin'>Please put your login credentials below.</p>
                  </div>
                  <form className='space-y-3'>
                    <input type="text" placeholder='User name' className='input_layout'/>
                    <input type="password" placeholder='Password' className='input_layout'/>
                    <div className='flex items-end justify-end'>
                      <button type="submit" className="btn_layout_text">
                        <span className="btn_text"> <HiOutlineLogin size={22}/> <span>Login</span> </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-center -z-10'>
              <div className='-mt-2 btn_layout_text w-40'>
                <h1 className='btn_text'>Help me</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-1/6 border'>
        client logo
      </div>
    </section>
  )
}
