import React from 'react'

export default function TakeOrder() {
  return (
    <section className='p-3 md:p-6 space-y-3'>
        <div className='hidden container_layout'>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <p className='text-3xl font-bold'>5</p>
                <h1 className='text-sm p-1.5 tracking-widest font-mono'>Going</h1>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer border-x'>
                <p className='text-3xl font-bold'>26</p>
                <h1 className='text-sm p-1.5 tracking-widest font-mono'>Total</h1>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <p className='text-3xl font-bold'>8</p>
                <h1 className='text-sm p-1.5 tracking-widest font-mono'>Your</h1>
            </div>
        </div>
        <div className='h-screen space-y-3'>
            <div className='container_layout2'>
                1
            </div>
            <div className='container_layout2'>
                1
            </div>
            <div className='container_layout2'>
                1
            </div>
            <div className='container_layout2'>
                1
            </div>
        </div>
    </section>
  )
}
