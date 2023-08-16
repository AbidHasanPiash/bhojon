'use client'
import { useSearchParams  } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {FaCcMastercard, FaCcVisa, FaCcPaypal} from 'react-icons/fa'
import {CgArrowLongLeftR} from 'react-icons/cg'
import Pricing from '@/components/home/Pricing';

export default function page() {
    const searchParams = useSearchParams()
    const plan = searchParams.get('plan');
    const [selectedPackage, setSelectedPackage] = useState(plan?plan:'monthly');
    useEffect(() => {
      const plan = searchParams.get('plan');
      setSelectedPackage((plan?plan:'monthly'));
    }, [searchParams]);
    const [paymentOption, setPaymentOption] = useState(null);
    const handlePackageSelect = (packageType) => {
      setSelectedPackage(packageType);
    };
    const handlePaymentOption = (option) => {
        setPaymentOption(option);
    }
  return (
    <div>
        {/* Heading text and images */}
        <section id='head' className="py-16">
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
                    <div className="flex items-center justify-center">
                        <Link href={'/'} className='flex items-center justify-center space-x-3 cursor-pointer text-xl text-gray-600 dark:text-gray-300 hover:text-rose-400'>
                            <CgArrowLongLeftR size={25}/> 
                            <span>Maybe later</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* Package selection */}
        <section className="py-16"> 
            <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
                <div className="gap-6 text-center md:flex md:text-left lg:gap-16">
                    {/* Plan and payment options */}
                    <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                        <div className='flex items-center justify-between space-x-4 pb-8 text-gray-800 dark:text-gray-200'>
                            <button onClick={() => handlePackageSelect('monthly')} className='group relative w-full py-2 flex items-center justify-center'>
                                <span>Monthly</span>
                                <span className={`${selectedPackage=='monthly' ? 'border-cyan-500 border-b-8' : 'border-b-0'} absolute bottom-0 w-full h-1 group-hover:h-full transition-all duration-200 bg-cyan-400/20`}/>
                            </button>
                            <button onClick={() => handlePackageSelect('annual')} className='group relative w-full py-2 flex items-center justify-center'>
                                <span>Annual</span>
                                <span className={`${selectedPackage=='annual' ? 'border-cyan-500 border-b-8' : 'border-b-0'} absolute bottom-0 w-full h-1 group-hover:h-full transition-all duration-200 bg-cyan-400/20`}/>
                            </button>
                            <button onClick={() => handlePackageSelect('free')} className='group relative w-full py-2 flex items-center justify-center'>
                                <span>Free</span>
                                <span className={`${selectedPackage=='free' ? 'border-cyan-500 border-b-8' : 'border-b-0'} absolute bottom-0 w-full h-1 group-hover:h-full transition-all duration-200 bg-cyan-400/20`}/>
                            </button>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                            {selectedPackage == 'monthly' && "Feature-Rich Monthly Flexibility with"}
                            {selectedPackage == 'annual' && "Savings, Full Access Annually with"}
                            {selectedPackage == 'free' && "Basic Features, Limited Time with"}
                            <span className="text-primary dark:text-sky-300">
                                {selectedPackage == 'monthly' && " 10% off"}
                                {selectedPackage == 'annual' && " 20% off"}
                                {selectedPackage == 'free' && " Zero Cost"}
                            </span>
                        </h1>
                        <div className="text-lg text-gray-600 dark:text-gray-300">
                            <p>Select your payment method.</p>
                            <div className='flex items-center justify-center md:justify-start space-x-3 pt-3'>
                                <button 
                                    onClick={()=> handlePaymentOption('master')} 
                                    className={`${paymentOption == 'master' && 'ring-2 ring-cyan-400'} hover:text-cyan-400 rounded-lg py-0.5 px-2`}>
                                    <FaCcMastercard size={40}/>
                                </button>
                                <button 
                                    onClick={()=> handlePaymentOption('visa')} 
                                    className={`${paymentOption == 'visa' && 'ring-2 ring-cyan-400'} hover:text-cyan-400 rounded-lg py-0.5 px-2`}>
                                    <FaCcVisa size={40}/>
                                </button>
                                <button 
                                    onClick={()=> handlePaymentOption('paypal')} 
                                    className={`${paymentOption == 'paypal' && 'ring-2 ring-cyan-400'} hover:text-cyan-400 rounded-lg py-0.5 px-2`}>
                                    <FaCcPaypal size={40}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <button href="#" className="relative flex h-12 w-full items-center justify-center px-8 border-cyan-400 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span className="relative text-base font-semibold text-cyan-400 ">Order Now</span>
                            </button>
                            <Link href="/purchase/#price" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span className="relative text-base font-semibold text-gray-600 dark:text-gray-300">More about</span>
                            </Link>
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
        </section>
        <section id="price"> <Pricing /> </section>
    </div>
  )
}
