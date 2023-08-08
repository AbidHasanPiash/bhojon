import React from "react";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Contact Us
        </h2>
        <p className="max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400">
          Experience the future of restaurant management with Resto Man - your
          digital solution for success.
        </p>
        <div className="container_layout lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2 flex items-center justify-center">
            <img
              src="images/common/contact.png"
              alt="image"
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Tell me about your Restaurant.
            </h2>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <form action="" className="mt-10 space-y-8 dark:text-white">
              <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-amber-400 dark:before:bg-amber-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input id="" type="email" placeholder="Your email" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-500 transition"/>
              </div>
              <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-amber-400 dark:before:bg-amber-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input id="" type="Your password" placeholder="Your message" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-500 transition"/>
              </div>
              <button className="w-fit rounded-full bg-amber-500 dark:bg-amber-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-amber-600 focus:bg-amber-600 active:bg-amber-800">
                  <span className="text-base font-semibold text-white dark:text-gray-900">Send</span>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
