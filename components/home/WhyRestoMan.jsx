import Image from 'next/image'
import React from 'react'
import { FcPositiveDynamic, FcTodoList } from 'react-icons/fc';

export default function WhyRestoMan() {
  return (
    <section className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Why Choose Resto Man?
            </h2>
            <p className='max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400'>
                Experience the future of restaurant management with Resto Man - your digital solution for success.
            </p>
        <div className="container_layout lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
            <Image
                src="/images/icon/pie.svg"
                className="w-auto h-auto"
                alt="image"
                loading="lazy"
                width="400"
                height="400"
            />
            </div>
            <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Your Recipe for Success in Restaurant Management
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
                Embrace Resto Man's innovative tools, data-driven insights, and seamless 
                experience to unlock the full potential of your restaurant's success.
            </p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                    <FcTodoList className="w-6 h-6 m-auto"/>        
                </div>
                <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Streamlined Operations</h4>
                    <p className="text-gray-500 dark:text-gray-400">Effortlessly manage food trends, customer preferences, and finances with Resto Man's intuitive features.</p>
                </div> 
                </div> 
                <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                    <FcPositiveDynamic className="w-6 h-6 m-auto"/>                                     
                </div>
                <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Data-Driven Growth</h4>
                    <p className="text-gray-500 dark:text-gray-400">Make informed decisions using comprehensive insights, propelling your restaurant towards excellence.</p>
                </div> 
                </div> 
            </div>
            </div>
        </div>
        </div>
    </section>                                 
  )
}
