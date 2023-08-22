import React from 'react'

export default function VirtualTables() {
    return (
        <div className='lg:col-span-2 space-y-6 group container_layout'>
            <div className='flex items-center justify-between text-xl'>
                <h1 className='text-xl font-bold md:text-3xl'>Table setup</h1>
                <div className='flex items-center space-x-5'>
                    <span><span className='text-3xl text-rose-300 dark:text-rose-700'>●</span> 5 </span>
                    <span><span className='text-3xl text-orange-300 dark:text-orange-700'>●</span> 1 </span>
                    <span><span className='text-3xl text-cyan-300 dark:text-cyan-700'>●</span> 4 </span>
                </div>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-3'>
                <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>1</span></div>
                    <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
                </div>
                <div className='h-20 rounded-lg bg-orange-200 dark:bg-orange-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>2</span></div>
                    <div className='h-1/3 bg-orange-300 dark:bg-orange-700 rounded px-4 py-1 text-center text-xs'>Booked</div>
                </div>
                <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>3</span></div>
                    <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
                </div>
                <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>4</span></div>
                    <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
                </div>
                <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>5</span></div>
                    <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
                </div>
                <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>6</span></div>
                    <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
                </div>
                <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>7</span></div>
                    <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
                </div>
                <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>8</span></div>
                    <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
                </div>
                <div className='h-20 rounded-lg bg-cyan-200 dark:bg-cyan-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>9</span></div>
                    <div className='h-1/3 bg-cyan-300 dark:bg-cyan-700 rounded px-4 py-1 text-center text-xs'>Free</div>
                </div>
                <div className='h-20 rounded-lg bg-rose-200 dark:bg-rose-900 overflow-hidden'>
                    <div className='h-2/3 text-3xl flex items-center justify-center'><span>10</span></div>
                    <div className='h-1/3 bg-rose-300 dark:bg-rose-700 rounded px-4 py-1 text-center text-xs'>Full</div>
                </div>
            </div>
        </div>
    )
}
