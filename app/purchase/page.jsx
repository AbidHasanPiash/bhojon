'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import {FaCcMastercard, FaCcVisa, FaCcPaypal} from 'react-icons/fa'

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
                <div className="m-auto md:w-8/12 lg:w-7/12">
                    <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl pb-6">Get Started now</h1>
                    <p className="text-center text-xl text-gray-600 dark:text-gray-300">
                        Embark on a journey to elevate your restaurant's success. <br /> Join Resto Man today.
                    </p>
                    <p className='text-center'>-or-</p>
                    <p className="text-center text-xl text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 hover:text-rose-400">
                        <Link href={'/'}>Change of plan, Let me go !</Link>
                    </p>
                </div>
            </div>
        </div>
        {/* Package selection */}
        <div className="py-16"> 
            <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
                <div className="gap-6 text-center md:flex md:text-left lg:gap-16">
                    {/* Plan and payment options */}
                    <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                        <div className='flex items-center justify-between space-x-4 pb-8 text-gray-800 dark:text-gray-200'>
                            <button onClick={() => handlePackageSelect('Monthly')} className='group relative w-full py-2 flex items-center justify-center'>
                                <span>Monthly</span>
                                <span className={`${selectedPackage=='Monthly' ? 'border-cyan-500 border-b-4' : 'border-b-0'} absolute bottom-0 w-full h-1 group-hover:h-full transition-all duration-200 bg-cyan-400/20`}/>
                            </button>
                            <button onClick={() => handlePackageSelect('Annual')} className='group relative w-full py-2 flex items-center justify-center'>
                                <span>Annual</span>
                                <span className={`${selectedPackage=='Annual' ? 'border-cyan-500 border-b-4' : 'border-b-0'} absolute bottom-0 w-full h-1 group-hover:h-full transition-all duration-200 bg-cyan-400/20`}/>
                            </button>
                            <button onClick={() => handlePackageSelect('Free')} className='group relative w-full py-2 flex items-center justify-center'>
                                <span>Free</span>
                                <span className={`${selectedPackage=='Free' ? 'border-cyan-500 border-b-4' : 'border-b-0'} absolute bottom-0 w-full h-1 group-hover:h-full transition-all duration-200 bg-cyan-400/20`}/>
                            </button>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                            {selectedPackage == 'Monthly' && "Feature-Rich Monthly Flexibility with"}
                            {selectedPackage == 'Annual' && "Savings, Full Access Annually and get"}
                            {selectedPackage == 'Free' && "Basic Features, Limited Time for"}
                            <span className="text-primary dark:text-sky-300">
                                {selectedPackage == 'Monthly' && " 10% off"}
                                {selectedPackage == 'Annual' && " 20% off"}
                                {selectedPackage == 'Free' && " Zero Cost"}
                            </span>
                        </h1>
                        <div className="text-lg text-gray-600 dark:text-gray-300">
                            <p>Select your payment method.</p>
                            <div className='flex space-x-3'>
                                <span><FaCcMastercard size={30}/></span>
                                <span><FaCcVisa size={30}/></span>
                                <span><FaCcPaypal size={30}/></span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <button href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-base font-semibold text-white dark:text-dark">Shop now</span>
                            </button>
                            <button href="#" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span className="relative text-base font-semibold text-primary dark:text-white">More about</span>
                            </button>
                        </div>
                    </div>
                    {/* Feature Images */}
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
