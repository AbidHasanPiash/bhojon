import { FcApproval, FcAdvance, FcCheckmark } from "react-icons/fc";

export default function Pricing() {
  return (
    <section className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div className="m-auto text-center lg:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Upgrade Your Restaurant Experience with Resto Man
        </h2>
        <p className='max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400'>
            Check out our value-packed pricing plans, empowering your restaurant with 
            advanced features. Elevate customer satisfaction and efficiency effortlessly.
        </p>
      </div>
      <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
        <div className="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Monthly
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                <span className="-ml-6 mt-2 text-3xl font-bold text-primary">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                  19
                </span>
              </div>
              <span className="absolute right-9 bottom-2 text-xl font-bold text-primary">
                / Month
              </span>
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Payment flexibility</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Data Analysis</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Daily Finance Reports</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Email Support</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>

        <div className="group relative row-start-1 md:col-span-2 lg:w-[36%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Annual
            </h3>
            <div className="overflow-hidden">
              <div className="-mr-20 flex items-end justify-center">
                <div className="flex">
                  <span className="-ml-6 mt-2 text-3xl font-bold text-primary">
                    $
                  </span>
                  <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                    15
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-xl font-bold text-gray-500 dark:text-gray-400">
                    .56
                  </span>
                  <span className="block text-xl font-bold text-primary">
                    / Month
                  </span>
                </div>
              </div>
              <div className="text-center text-2xl font-medium">
                <span className="text-gray-400 line-through">$234</span>
                <span className="font-semibold text-gray-700 dark:text-white">
                  $190
                </span>
              </div>
              <span className="block text-center text-xs uppercase text-primary">
                BILLED YEARLY
              </span>
              <span className="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900">
                1 Discount applied
              </span>
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li className="space-x-2 flex items-center">
                <FcApproval size={22}/>
                <span>Cost Savings</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcApproval size={22}/>
                <span>Data Analysis</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcApproval size={22}/>
                <span>Daily Finance Reports</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcApproval size={22}/>
                <span>Advanced Customer Insights</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcApproval size={22}/>
                <span>Priority Email Support</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>

        <div className="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              Free
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                <span className="-ml-2 mt-2 text-3xl font-bold text-primary">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
                  0
                </span>
              </div>
            </div>
            <ul
              role="list"
              className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Risk-Free Trial (15 Days)</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Data Analysis (Limited)</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Limited Finance Reports</span>
              </li>
              <li className="space-x-2 flex items-center">
                <FcCheckmark size={22}/>
                <span>Email Support</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
