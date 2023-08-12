"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import TestimonialCard from "../common/TestimonialCard";

export default function Testimonials() {
  const Testimonial = [
    {
      id: 1, 
      name: 'Cynthia J. Watts', 
      img: '/images/user.jpg', 
      restaurant: 'Caffe Daruchini', 
      testimonial: 'Your favorite companies are our partners.',
      star: 4,
      date: '04.06.23'
    },
    {
      id: 2, 
      name: 'Abid Hasan', 
      img: '/images/user.jpg', 
      restaurant: 'Caffe Daruchini', 
      testimonial: 'Your favorite companies are our partners.',
      star: 5,
      date: '04.06.23'
    },
    {
      id: 3, 
      name: 'Sharmin Shila', 
      img: '/images/user.jpg', 
      restaurant: 'Caffe Daruchini', 
      testimonial: 'Your favorite companies are our partners.',
      star: 4,
      date: '04.06.23'
    },
    {
      id: 4, 
      name: 'Akib Hasan', 
      img: '/images/user.jpg', 
      restaurant: 'Caffe Daruchini', 
      testimonial: 'Your favorite companies are our partners.',
      star: 3,
      date: '04.06.23'
    },
    {
      id: 5, 
      name: 'Arifa Billah', 
      img: '/images/user.jpg', 
      restaurant: 'Caffe Daruchini', 
      testimonial: 'Your favorite companies are our partners.',
      star: 3,
      date: '04.06.23'
    },
  ]
  return (
    <section className="py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div>
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
          <p className="max-w-3xl mx-auto my-3 md:my-6 text-center text-gray-600 dark:text-gray-400">
            We don't like to brag, but we don't mind letting our customers do it
            for us. Here are a few nice things folks have said about our services.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:-mx-8">
          {/* Swiper with Testimonials */}
          <div className="p-8 py-12 sm:p-12 overflow-hidden lg:overflow-visible rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <h1 className="text-xl text-center text-gray-600 dark:text-gray-400 font-bold md:text-3xl pb-4">
                <span>What's our clients say</span>
                <span className='text-cyan-700 dark:text-cyan-400'>.</span>
              </h1>
              <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-60 h-96">
                {Testimonial.map((t,i)=>(
                  <SwiperSlide key={i}>
                    <TestimonialCard info={t} index={i}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Client Logos */}
          <div className="md:col-span-2 p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="container m-auto px-6 space-y-8 md:px-12">
              <h2 className="text-xl text-gray-600 dark:text-gray-400 font-bold md:text-3xl">
                <span>Your favorite companies are our partners</span>
                <span className='text-cyan-700 dark:text-cyan-400'>.</span>
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-4">
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
