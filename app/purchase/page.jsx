import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section>
        <div className="py-16">
            <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
                <div className="flex items-center justify-center -space-x-2">
                    <img
                        loading="lazy"
                        width="220"
                        height="220"
                        src="https://tailus.io/sources/blocks/app/preview/images/avatars/second_user.webp"
                        alt="member photo"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="220"
                        height="220"
                        src="https://tailus.io/sources/blocks/app/preview/images/avatars/first_user.webp"
                        alt="member photo"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="220"
                        height="220"
                        src="https://tailus.io/sources/blocks/app/preview/images/avatars/third_user.webp"
                        alt="member photo"
                        className="z-10 h-16 w-16 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="220"
                        height="220"
                        src="https://tailus.io/sources/blocks/app/preview/images/avatars/first_user.webp"
                        alt="member photo"
                        className="relative h-12 w-12 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="220"
                        height="220"
                        src="https://tailus.io/sources/blocks/app/preview/images/avatars/second_user.webp"
                        alt="member photo"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                </div>
                <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
                    <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Get Started now</h1>
                    <p className="text-center text-xl text-gray-600 dark:text-gray-300">
                        Embark on a journey to elevate your restaurant's success. <br /> Join Resto Man today.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="py-16"> 
            <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
                <div
                className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16"
                >
                <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                    <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                    Buy now and benefit up to <span className="text-primary dark:text-sky-300">30% off</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                    Be part of millions people around the world using tailus in modern User Interfaces.
                    </p>
                    <div className="flex flex-wrap gap-6">
                    <a
                        href="#"
                        className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    >
                        <span className="relative text-base font-semibold text-white dark:text-dark"
                        >Shop now</span
                        >
                    </a>
                    <a
                        href="#"
                        className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                    >
                        <span
                        className="relative text-base font-semibold text-primary dark:text-white"
                        >More about</span
                        >
                    </a>
                </div>
                </div>
                <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                    <div className="col-span-2 row-span-4">
                    <img
                        src="/images/common/demo1.png"
                        className="rounded-full"
                        width="640"
                        height="960"
                        alt="shoes"
                        loading="lazy"
                    />
                    </div>
                    <div className="col-span-2 row-span-2">
                    <img
                        src="/images/common/demo3.png"
                        className="h-full w-full rounded-xl object-cover object-top"
                        width="640"
                        height="640"
                        alt="shoe"
                        loading="lazy"
                    />
                    </div>
                    <div className="col-span-3 row-span-3">
                    <img
                        src="/images/common/demo2.png"
                        className="h-full w-full rounded-xl object-cover object-top"
                        width="640"
                        height="427"
                        alt="shoes"
                        loading="lazy"
                    />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
