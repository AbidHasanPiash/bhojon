"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

//import './styles.css';

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div>
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
          <p className="max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400">
            We don't like to brag, but we don't mind letting our customers do it
            for us. Here are a few nice things folks have said about our themes
            over the years.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:-mx-8">
          {/* Swiper with Testimonials */}
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="">
              <h1 className="text-xl text-gray-700 font-bold md:text-3xl pb-4">
                <span>What's our clients say</span>
                <span className='text-cyan-700 dark:text-cyan-400'>.</span>
              </h1>
              <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-60">
                <SwiperSlide>
                  <div className="w-full h-96 rounded-2xl text-gray-900 bg-green-300">
                    <div className="w-full h-full flex-col items-center justify-center">
                      <div className="w-full h-3/4">
                        <div className="flex items-center gap-2 p-3">
                          <Image
                            src={'/images/user.jpg'}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <h1>Cynthia J. Watts</h1>
                        </div>
                      </div>
                      <div className="w-full h-1/4 border-t-2 border-dashed border-gray-900">
                        <div>
                          <span className="bg-slate-700 px-2">5⭐</span>
                        </div>
                        <div className="flex-col items-center justify-center">
                          <Image
                            src={'/images/common/barcode.png'}
                            width={400}
                            height={100}
                            className="w-full"
                          />
                          <p className="text-center text-sm text-black">1 8 9 5 6 2 4 8 7 8 9</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-96 rounded-2xl p-3 text-gray-900 bg-rose-300">
                    Slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-96 rounded-2xl p-3 text-gray-900 bg-amber-300">
                    Slide 3
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-96 rounded-2xl p-3 text-gray-900 bg-gray-300">
                    Slide 4
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-96 rounded-2xl p-3 text-gray-900 bg-fuchsia-300">
                    Slide 5
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* Client Logos */}
          <div className="md:col-span-2 p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="container m-auto px-6 space-y-8 md:px-12">
              <h2 className="text-xl text-gray-700 font-bold md:text-3xl">
                <span>Your favorite companies are our partners</span>
                <span className='text-cyan-700 dark:text-cyan-400'>.</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <div className="p-4">
                  <img
                    src="images/client/client1.png"
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client2.png"
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client3.png"
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client4.png"
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client5.png"
                    className="w-32"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client6.png"
                    className="w-32"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client1.png"
                    className="w-32 "
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <img
                    src="images/client/client2.png"
                    className="w-32 "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
