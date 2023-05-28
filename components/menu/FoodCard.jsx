import Image from 'next/image'

export default function FoodCard({item}) {
  return (
    <div className="group relative h-60 rounded-2xl overflow-hidden">
      <Image
        className="w-full h-40 object-cover group-hover:scale-110 group-hover:grayscale transition-all duration-300"
        src={item.image}
        alt="food"
        loading="lazy"
        width="200"
        height="200"
      />
      <div className="absolute bottom-0 inset-0 h-20 group-hover:h-40 mt-auto bg-gray-200 dark:bg-gray-900 transition-all duration-300">
        <div className='h-20 p-2 flex flex-col justify-between'>
          <h4 className="text-lg leading-none line-clamp-2 font-semibold text-gray-700 dark:text-white">{item.name}</h4>
          <div className='flex items-center justify-between'>
            <span className="text-gray-800 dark:text-gray-300">{item.size}</span>
            <span className="text-gray-800 dark:text-gray-300">$ {item.price}</span>
          </div>
        </div>
        <div className='px-3 w-full'>
          <table className='table-auto w-full text-gray-800 dark:text-gray-300'>
            <caption className="caption-top text-xs">
              Order statistics
            </caption>
            <tbody>
              <tr> <td>Today</td> <td className='text-right'>{item.orderToday}</td> </tr>
              <tr> <td>week</td> <td className='text-right'>{item.orderWeek}</td> </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
