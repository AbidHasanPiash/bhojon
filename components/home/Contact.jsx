import Image from "next/image";
import { SiFacebook, SiGmail, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Contact Us
        </h2>
        <p className="max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400">
        We're here to connect, assist, and engage with you. Whether you have a question, feedback, or simply want to reach out, our dedicated team is ready to listen and respond. 
        </p>
        <div className="container_layout lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2 flex flex-col items-center justify-center">
            <h2 className="lg:hidden text-xl text-center text-gray-600 dark:text-gray-400 font-bold md:text-3xl pb-4">
                Tell me about your Restaurant.
            </h2>
            <Image
              src="/images/common/contact.png"
              className="w-auto h-auto"
              alt="image"
              loading="lazy"
              width="200"
              height="200"
            />
            <div className="flex space-x-4 pt-3">
              <SiFacebook size={30} className="cursor-pointer text-amber-600 dark:text-amber-300 hover:text-amber-600 active:text-amber-800"/>
              <SiGmail size={30} className="cursor-pointer text-amber-600 dark:text-amber-300 hover:text-amber-600 active:text-amber-800"/>
              <SiGithub size={30} className="cursor-pointer text-amber-600 dark:text-amber-300 hover:text-amber-600 active:text-amber-800"/>
            </div>
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="hidden lg:block text-xl text-gray-600 dark:text-gray-400 font-bold md:text-3xl">
                Tell me about your Restaurant.
            </h2>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <form action="" className="mt-10 space-y-8 dark:text-white">
              <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-amber-400 dark:before:bg-amber-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input id="email" type="email" placeholder="Your email" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-500 transition"/>
              </div>
              <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-amber-400 dark:before:bg-amber-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input id="" type="text" placeholder="Your message" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-500 transition"/>
              </div>
              <button className="w-fit rounded-full bg-amber-600 dark:bg-amber-300 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-amber-600 focus:bg-amber-600 active:bg-amber-800">
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
