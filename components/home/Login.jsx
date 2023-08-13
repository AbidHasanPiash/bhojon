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
    <section id="login" className="container_gap h-screen bg_tech_ground">
      <div className='h-5/6 grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
        <div className='h-full flex flex-col items-start justify-end lg:justify-center'>
          <h1 className="text-6xl lg:text-8xl font-bold still_gradient">
            <span>Resto Man</span>
            <span className='text-cyan-700 dark:text-cyan-400'>.</span>
          </h1>
          <p className=' md:text-xl lg:text-2xl tracking-widest lg:tracking-[5px] pl-1 lg:pl-2'>Your Digital Restaurant Solution</p>
          <p className="mt-10 pr-20 tracking-wider text-gray-600 dark:text-gray-400 text-sm lg:text-base hidden lg:block">The ultimate digital restaurant solution, simplifying operations, enhancing efficiency, and elevating dining experiences seamlessly.</p>
          <div className="mt-10 w-full md:w-80 h-14 px-2 border-2 border-dashed border-cyan-500 rounded-full flex items-center justify-between">
            <p className="text-center w-full font-bold">Get a free trial !!</p>
            <button className="h-10 py-3 px-6 text-center rounded-full transition bg-cyan-300 hover:bg-cyan-100 active:bg-cyan-400 focus:bg-cyan-300 sm:w-max">
              <Link href="#contsct" className="block text-cyan-900 font-semibold text-sm px-4">
                Contact
              </Link>
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center md:mx-6 lg:mx-12'>
          <div className='flex flex-col items-center'>
            <div className='rounded-3xl hover:shadow-2xl hover:shadow-cyan-800'>
              <div className="container_layout2 w-full">
                <div className='flex items-center justify-center'>
                  <div className='-mt-20 flex items-center justify-center w-20 h-20 input_layout2 bg-white'>
                    <span className='text-6xl text-cyan-700 dark:text-cyan-400'>
                      <BiUserCircle/>
                    </span>
                  </div>
                </div>
                <div className='mt-6 space-y-6'>
                  <div className='text-center space-y-6'>
                    <h1 className='text-xl lg:text-3xl font-bold'>Agent Login</h1>
                    <p className='text-xs lg:text-sm tracking-wider text-gray-600 dark:text-gray-400'>Please put your login credentials below.</p>
                  </div>
                  <form className='space-y-3'>
                    <input type="text" placeholder='User name' className='input_layout'/>
                    <input type="password" placeholder='Password' className='input_layout'/>
                    <div className='flex items-center justify-center'>
                      <button type="submit" className="btn_layout_text">
                        <Link href={'/dashboard'}>
                          <span className="btn_text"> <HiOutlineLogin size={22}/> <span>Login</span> </span>
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
      <div className='h-1/6 z-0'>
        <div className="h-full w-full flex items-center justify-center space-x-6 lg:space-x-10 z-0">
          {Clients.map((client, index)=>(
            <Image
              key={index}
              className="w-10 h-10 lg:w-20 lg:h-20 dark:grayscale dark:hover:grayscale-0 hover:scale-110 transition-all duration-300 z-0"
              src={client.img}
              alt="food"
              loading="lazy"
              width="200"
              height="200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
