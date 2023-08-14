'use client'
import React, { useState } from 'react'

export default function page() {
    const [selectedPackage, setSelectedPackage] = useState('Monthly');
  
    const handlePackageSelect = (packageType) => {
      setSelectedPackage(packageType);
      // Update payment balance here
    };
  return (
    <section>
        {/* Heading text and images */}
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
        {/* Package selection */}
        <div className="py-16"> 
            <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
                <div className="gap-6 text-center md:flex md:text-left lg:gap-16">
                    <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                        <div className='flex items-center justify-between pb-8'>
                            <button onClick={() => handlePackageSelect('Monthly')}>Monthly</button>
                            <button onClick={() => handlePackageSelect('Annual')}>Annual</button>
                            <button onClick={() => handlePackageSelect('Free')}>Free</button>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                            {selectedPackage == 'Monthly' && "Feature-Rich Monthly Flexibility with"}
                            {selectedPackage == 'Annual' && "Savings, Full Access Annually and get"}
                            {selectedPackage == 'Free' && "Basic Features,"}
                            <span className="text-primary dark:text-sky-300">
                                {selectedPackage == 'Monthly' && " 10% off"}
                                {selectedPackage == 'Annual' && " 20% off"}
                                {selectedPackage == 'Free' && " Zero Cost"}
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Choose the plan that fits your needs and enjoy the benefits of RestoMan's powerful restaurant management system.
                        </p>
                        <div className="flex flex-wrap gap-6">
                        <a href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                            <span className="relative text-base font-semibold text-white dark:text-dark">Shop now</span>
                        </a>
                        <a href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                            <span className="relative text-base font-semibold text-primary dark:text-white">More about</span>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                    <div className="col-span-2 row-span-4">
                        <img src="/images/common/demo1.png" className="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <img src="/images/common/demo3.png" className="h-full w-full rounded-xl object-cover object-top" width="640" height="640" alt="shoe" loading="lazy"/>
                    </div>
                    <div className="col-span-3 row-span-3">
                        <img src="/images/common/demo2.png" className="h-full w-full rounded-xl object-cover object-top" width="640" height="427" alt="shoes" loading="lazy"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
