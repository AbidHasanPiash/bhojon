import React from 'react'

export default function Features() {
  return (
    
    <div className="py-16">
        <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div>
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Discover Our Powerful Features.
            </h2>
            <p className='max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400'>
                Unleash the potential of 'Resto Man' as we bring you a trio of 
                cutting-edge tools designed to streamline restaurant management, 
                enhance customer experiences, and boost overall efficiency.
            </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
                <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                >
                <span className="font-bold text-indigo-600 dark:text-indigo-400">1</span>
                </div>
                <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Harness data-driven decisions with comprehensive analysis of food trends and customer preferences.
                </p>
                </div>
                <img
                // src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                src="/images/icon/chart.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
                />
            </div>
            </div>
            <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
                <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                >
                <span className="font-bold text-orange-600 dark:text-orange-400">2</span>
                </div>
                <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    Report
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Generate daily finance reports and essential analytics for optimized decision-making.
                </p>
                </div>
                <img
                // src="https://cdn-icons-png.flaticon.com/512/7983/7983306.png"
                src="/images/icon/report.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
                />
            </div>
            </div>
            <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
                <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-gray-700"
                >
                <span className="font-bold text-cyan-600 dark:text-cyan-400">3</span>
                </div>
                <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    Reviews
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Identify top customers and gather valuable reviews for unparalleled customer satisfaction.
                </p>
                </div>
                <img
                // src="https://cdn-icons-png.flaticon.com/512/7983/7983333.png"
                src="/images/icon/customer.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
                />
            </div>
            </div>
        </div>
        </div>
    </div>
                                      
  )
}
