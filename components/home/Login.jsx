import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";

export default function Login() {
  const Clients = [
    {img:'/images/client/client1.png'},
    {img:'/images/client/client2.png'},
    {img:'/images/client/client3.png'},
    {img:'/images/client/client4.png'},
    {img:'/images/client/client5.png'},
    {img:'/images/client/client6.png'},
  ]
  return (
    <section id="login" className="container_gap mt-20 lg:mt-0 h-screen">
      <div className='h-full grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
        <div className='h-full flex flex-col items-start justify-center lg:justify-center'>
          <h1 className="text-6xl lg:text-8xl font-bold still_gradient">
            <span>Resto Man</span>
            <span className='text-cyan-700 dark:text-cyan-400'>.</span>
          </h1>
          <p className=' md:text-xl lg:text-2xl tracking-widest lg:tracking-[5px] pl-1 lg:pl-2'>Your Digital Restaurant Solution</p>
          <p className="mt-10 pr-20 tracking-wider text-gray-600 dark:text-gray-400 text-sm lg:text-base hidden lg:block">The ultimate digital restaurant solution, simplifying operations, enhancing efficiency, and elevating dining experiences seamlessly.</p>
          <div className="mt-10 w-full md:w-80 h-14 px-2 border-2 border-dashed border-cyan-500 rounded-full flex items-center justify-between">
            <p className="text-center w-full font-bold">Get a free trial !!</p>
            <button className="h-10 py-3 px-6 text-center rounded-full transition bg-cyan-300 hover:bg-cyan-100 active:bg-cyan-400 focus:bg-cyan-300 sm:w-max">
              <a href="#contsct" className="block text-cyan-900 font-semibold text-sm px-4">
                Contact
              </a>
            </button>
          </div>
        </div>
        <div className="flex items-start justify-center lg:items-center lg:justify-center md:mx-6 lg:mx-12 mt-20 lg:mt-0">
          <div className='flex flex-col items-center'>
            <div className='rounded-3xl hover:shadow-2xl hover:shadow-cyan-800 '>
              <div className='container_layout2 w-full bg-[url("/images/common/pizza.png")] bg-cover'>
                <div className='flex items-center justify-center'>
                  <div className='-mt-20 flex items-center justify-center w-20 h-20 input_layout2 bg-white'>
                    <span className='text-6xl text-cyan-300'>
                      <BiUserCircle/>
                    </span>
                  </div>
                </div>
                <div className='mt-6 space-y-6'>
                  <div className='text-center space-y-6'>
                    <h1 className='text-2xl lg:text-3xl font-bold pb-10'>Agent Login</h1>
                  </div>
                  <form className='space-y-3 lg:space-y-8'>
                    <input type="text" placeholder='User ID' className='input_layout lg:h-12'/>
                    <input type="password" placeholder='Password' className='input_layout lg:h-12'/>
                    <div className='flex items-center justify-center'>
                      <button type="submit" className="h-10 py-3 px-6 text-center rounded-full transition bg-cyan-300 hover:bg-cyan-100 active:bg-cyan-400 focus:bg-cyan-300 sm:w-max">
                        <Link href={'/dashboard'}>
                          <span className="flex space-x-3 text-cyan-900 font-semibold text-sm px-4"> 
                            <HiOutlineLogin size={22}/> 
                            <span>Login</span> 
                          </span>
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
