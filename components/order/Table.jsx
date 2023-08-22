import { HiTrash } from 'react-icons/hi'

export default function Table({index, status}) {
  return (
    <div className={`h-20 rounded-lg overflow-hidden relative group
        ${status == 'full' && 'bg-rose-200 dark:bg-rose-900'}
        ${status == 'free' && 'bg-cyan-200 dark:bg-cyan-900'}
        ${status == 'booked' && 'bg-orange-200 dark:bg-orange-900'}
    `}>
        <div className='h-2/3 text-3xl flex items-center justify-center'><span>{index+1}</span></div>
        <div className={`h-1/3 rounded px-4 py-1 text-center text-xs
            ${status == 'full' && 'bg-rose-300 dark:bg-rose-700'}
            ${status == 'free' && 'bg-cyan-300 dark:bg-cyan-700'}
            ${status == 'booked' && 'bg-orange-300 dark:bg-orange-700'}
        `}>
            {status}
        </div>
        <button className="absolute top-1.5 right-2 group-hover:block hidden">
            <span className="text-gray-600 dark:text-gray-300 hover:text-red-500"><HiTrash/></span>
        </button>
    </div>
  )
}
