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

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-center md:text-left text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                We have some fans.
            </h2>
            <p className="text-center md:text-left my-8 text-gray-600 dark:text-gray-300">
            We don't like to brag, but we don't mind letting our customers do it for us.
            Here are a few nice things folks have said about our themes over the years.
            </p>
          </div>
          <div className="md:5/12 lg:w-1/2">
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-60">
              <SwiperSlide>
                <div className="w-full h-96 rounded-2xl p-3 text-gray-900 bg-green-300">
                  Slide 1
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
        {/* Logo cloud */}
        <div className="py-16">
            <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Your favorite companies are our partners.</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    <div className="p-4">
                        <img src="images/client/client1.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client2.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client3.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client4.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client5.png" className="w-32" alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client6.png" className="w-32" alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client1.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/client/client2.png" className="w-32 " alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
