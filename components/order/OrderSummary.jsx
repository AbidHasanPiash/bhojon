import {MdDeliveryDining, MdAccessTimeFilled, MdOutlineRestaurantMenu} from 'react-icons/md';
import {BsBookmarkStarFill} from 'react-icons/bs';

export default function OrderSummary() {
  return (
    <div className="lg:col-span-2 grid gap-6 grid-cols-2">
        <div className='order_card'>
            <div>
            <h1 className='text-xl font-bold md:text-3xl mb-3'>Order</h1>
            <span><MdOutlineRestaurantMenu size={40}/></span>
            </div>
            <h1 className='text-5xl lg:text-8xl font-extrabold'>7</h1>
        </div>
        <div className='order_card'>
            <div>
            <h1 className='text-xl font-bold md:text-3xl mb-3'>Delivery</h1>
            <span><MdDeliveryDining size={40}/></span>
            </div>
            <h1 className='text-5xl lg:text-8xl font-extrabold'>2</h1>
        </div>
        <div className='order_card'>
            <div>
            <h1 className='text-xl font-bold md:text-3xl mb-3'>Pending</h1>
            <span><MdAccessTimeFilled size={38}/></span>
            </div>
            <h1 className='text-5xl lg:text-8xl font-extrabold'>3</h1>
        </div>
        <div className='order_card'>
            <div>
            <h1 className='text-xl font-bold md:text-3xl mb-3'>Booked</h1>
            <span><BsBookmarkStarFill size={35}/></span>
            </div>
            <h1 className='text-5xl lg:text-8xl font-extrabold'>1</h1>
        </div>
    </div>
  )
}
