'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Nav() {
  const [systemTheme, setSystemTheme] = useState('dark');
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };
    darkModeQuery.addEventListener('change', handleThemeChange);
    return () => {
      darkModeQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const imagePath = `/logos/rm_mini_${systemTheme === 'dark' ? 'light' : 'dark'}.png`;

  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-cyan-700 dark:bg-cyan-300 transition ease transform duration-300`;
  return (
    <nav className="z-50 w-full absolute bg-transparent">
      <div className="container fixed top-0 left-0 right-0 m-auto px-2 md:px-12 lg:px-7 backdrop-blur-md bg-white/10 rounded-b-xl">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            {/* Main LOGO */}
            <Link href="#login" aria-label="logo" className="flex space-x-2 items-center">
              <Image
                src={imagePath}
                className="w-8 lg:w-12"
                alt="tailus logo"
                width="144"
                height="133"
              />
              <span className="text-xl lg:text-2xl font-bold text-cyan-900 dark:text-white">
                Resto{" "}
                <span className="text-cyan-700 dark:text-cyan-300">Man.</span>
              </span>
            </Link>
            {/* Hamburger buttom */}
            <div className="flex items-center max-h-10">
              <button onClick={() => setIsOpen((p)=>!p)} className="lg:hidden flex flex-col h-6 w-12 justify-center items-center group" >
                <div className={`${hamburgerLine} ${ isOpen && " rotate-45 translate-y-1.5 "}`}/>
                <div className={`${hamburgerLine} ${ isOpen && "-rotate-45 -translate-y-1.5"}`}/>
              </button>
            </div>
          </div>
          <div className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12`}>
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul className="tracking-wide font-medium  text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                <li>
                  <Link href="#why" onClick={() => isOpen && setIsOpen((p)=>!p)} className="block md:px-4 transition dark:text-gray-300 dark:hover:text-cyan-300 hover:text-cyan-700">
                    <span>I've a restaurant</span>
                  </Link>
                </li>
                <li>
                  <Link href="#features" onClick={() => isOpen && setIsOpen((p)=>!p)} className="block md:px-4 transition dark:text-gray-300 dark:hover:text-cyan-300 hover:text-cyan-700">
                    <span>Futures</span>
                  </Link>
                </li>
                <li>
                  <Link href="#price" onClick={() => isOpen && setIsOpen((p)=>!p)} className="block md:px-4 transition dark:text-gray-300 dark:hover:text-cyan-300 hover:text-cyan-700">
                    <span>Price</span>
                  </Link>
                </li>
                <li>
                  <Link href="#contsct" onClick={() => isOpen && setIsOpen((p)=>!p)} className="block md:px-4 transition dark:text-gray-300 dark:hover:text-cyan-300 hover:text-cyan-700">
                    <span>Contsct</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div  className="w-full min-w-max space-y-2 border-cyan-200 lg:space-y-0 sm:w-max lg:border-l-2 dark:lg:border-cyan-700 pl-4">
              <Link href={'/purchase'}>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-cyan-300 hover:bg-cyan-100 active:bg-cyan-400 focus:bg-cyan-300 sm:w-max"
                >
                  <span className="block text-cyan-900 font-semibold text-sm px-4">
                    Buy
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export async function getStaticProps() {
  let systemTheme = 'light'; // Default to light if unable to determine

  if (typeof window !== 'undefined') {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    systemTheme = darkModeQuery.matches ? 'dark' : 'light';
    console.log('Detected System Theme:', systemTheme);
  }

  return {
    props: {
      systemTheme,
    },
  };
}