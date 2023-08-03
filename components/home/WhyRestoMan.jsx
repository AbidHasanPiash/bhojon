import React from 'react'

export default function WhyRestoMan() {
  return (
    <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Why Resto Man.
            </h2>
            <p className='max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400'>
                Experience the future of restaurant management with Resto Man - your digital solution for success.
            </p>
        <div className="container_layout lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
            <img
                src="images/icon/pie.svg"
                alt="image"
                loading="lazy"
                width=""
                height=""
            />
            </div>
            <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Resto Man: Your Recipe for Success in Restaurant Management
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
                Embrace Resto Man's innovative tools, data-driven insights, and seamless 
                experience to unlock the full potential of your restaurant's success.
            </p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                    <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
                    </svg>        
                </div>
                <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Chat Anytime</h4>
                    <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
                </div> 
                </div> 
                <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>                                      
                </div>
                <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Real Time Location</h4>
                    <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
                </div> 
                </div> 
            </div>
            </div>
        </div>
        </div>
    </div>                                 
  )
}
