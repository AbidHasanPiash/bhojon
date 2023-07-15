import React from 'react'

export default function CustomerTableRow({index, customer, Customers}) {
  return (
    <tr className={` ${index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-900' : 'bg-gray-300 dark:bg-gray-700'} h-10`}>
        <td className={`${index === Customers.length - 1 && 'rounded-bl-lg'} pl-2`}>{customer.id}</td>
        <td className='pl-2'>{customer.name}</td>
        <td className='pl-2'>{customer.phone}</td>
        <td className='pl-2 hidden lg:table-cell'>{customer.visited}</td>
        <td className='pl-2 hidden lg:table-cell'>{customer.started}</td>
        <td className='pl-2'>{customer.totalbill}</td>
        <td className={`${index === Customers.length - 1 && 'rounded-br-lg'} pl-2`}>
            <button>
              action
            </button>
        </td>
    </tr>
  )
}
