import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";
import Nav from "@/components/home/Nav";

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
    <section className="container_gap h-screen bg_tech_ground">
      <Nav/>
      <div className='h-5/6 grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
        <div className='h-full flex flex-col items-start justify-center'>
          <h1 className="text-6xl lg:text-8xl font-bold still_gradient">
            <span>Resto Man</span>
            <span className='text-cyan-700 dark:text-cyan-400'>.</span>
          </h1>
          <p className='text-xl lg:text-2xl tracking-widest lg:tracking-[5px] pl-1 lg:pl-2'>Your Digital Restaurant Solution</p>
          <p className="mt-10 pr-20 tracking-wider text-gray-600 dark:text-gray-400 text-sm lg:text-base hidden lg:block">The ultimate digital restaurant solution, simplifying operations, enhancing efficiency, and elevating dining experiences seamlessly.</p>
          <div className="mt-10 w-full md:w-80 h-14 px-2 border border-dashed border-cyan-500 rounded-full flex items-center justify-between">
            <p className="text-center w-full">Get free trial !!</p>
            <button className="h-10 bg-cyan-500 hover:bg-black font-bold text-black hover:text-cyan-500 duration-300 transition-colors rounded-full px-6">
              <Link href={'#'}>
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
                <div className='mt-6'>
                  <div className='text-center space-y-3 mb-3'>
                    <h1 className='text-xl lg:text-3xl font-bold'>Agent Login</h1>
                    <p className='text-xs lg:text-sm font-thin'>Please put your login credentials below.</p>
                  </div>
                  <form className='space-y-3'>
                    <input type="text" placeholder='User name' className='input_layout'/>
                    <input type="password" placeholder='Password' className='input_layout'/>
                    <Link href={'/dashboard'} className='flex items-center justify-center'>
                      <button type="submit" className="btn_layout_text">
                        <span className="btn_text"> <HiOutlineLogin size={22}/> <span>Login</span> </span>
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-1/6'>
        <div className="h-full w-full overflow-y-auto flex items-center justify-center space-x-6 lg:space-x-10 select-none">
          {Clients.map((client, index)=>(
            <Image
              key={index}
              className="w-10 h-10 lg:w-20 lg:h-20 object-cover dark:grayscale dark:hover:grayscale-0 hover:scale-110 transition-all duration-300"
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
