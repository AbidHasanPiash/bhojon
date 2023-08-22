import {HiEye, HiPencilAlt, HiDocumentDownload} from 'react-icons/hi';

export default function OrderReportRow({index, row, Orders}) {
  return (
    <tr className={` ${index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-900' : 'bg-gray-300 dark:bg-gray-700'} h-10`}>
        <td className={`${index === Orders.length - 1 && 'rounded-bl-lg'} pl-2`}>{row.id}</td>
        <td>{row.table}</td>
        <td>{row.status}</td>
        <td>{row.waiter}</td>
        <td>{row.time}</td>
        <td>{row.amount}</td>
        <td className={`${index === Orders.length - 1 && 'rounded-br-lg'} pr-2 h-10 w-full flex items-center justify-between space-x-3`}>
          <button>
            <HiEye size={20}/>
          </button>
          <button>
            <HiPencilAlt size={20}/>
          </button>
          <button>
            <HiDocumentDownload size={20}/>
          </button>
        </td>
    </tr>
  )
}
