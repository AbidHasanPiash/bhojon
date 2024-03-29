"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import TestimonialCard from "../common/TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  const Testimonial = [
    {
      id: 1, 
      name: 'Cynthia J. Watts', 
      img: '/images/user.jpg', 
      restaurant: 'Cynthia\'s Pizzeria', 
      testimonial: 'RestoMan streamlined Cynthia\'s Pizzeria. User-friendly and efficient, a must-have for restaurant owners.',
      star: 4,
      date: '04.06.23'
    },
    {
      id: 2, 
      name: 'Abid Hasan', 
      img: '/images/user.jpg', 
      restaurant: 'Abid\'s Bistro', 
      testimonial: 'RestoMan, a lifesaver for Abid\'s Bistro. Packed with features, exceptional support. Highly recommend it.',
      star: 5,
      date: '04.06.23'
    },
    {
      id: 3, 
      name: 'Sharmin Shila', 
      img: '/images/user.jpg', 
      restaurant: 'Shila\'s Cafe', 
      testimonial: 'RestoMan revolutionized Shila\'s Cafe. Fantastic reporting, easy to use. A must-have for restaurant owners.',
      star: 4,
      date: '04.06.23'
    },
    {
      id: 4, 
      name: 'Akib Hasan', 
      img: '/images/user.jpg', 
      restaurant: 'Akib\'s Grill House', 
      testimonial: 'Reliable RestoMan for Akib\'s Grill House. Simplifies orders, inventory. Satisfying performance.',
      star: 3,
      date: '04.06.23'
    },
    {
      id: 5, 
      name: 'Arifa Billah', 
      img: '/images/user.jpg', 
      restaurant: 'Arifa\'s Fine Dining', 
      testimonial: 'Efficiently manage with RestoMan. A solid choice for restaurant management. Appreciate ongoing support.',
      star: 3,
      date: '04.06.23'
    },
  ];
  const Client = [
    {logo: '/images/client/client1.png'},
    {logo: '/images/client/client2.png'},
    {logo: '/images/client/client3.png'},
    {logo: '/images/client/client4.png'},
    {logo: '/images/client/client5.png'},
    {logo: '/images/client/client6.png'},
    {logo: '/images/client/client1.png'},
    {logo: '/images/client/client2.png'},
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
          <div className="md:col-span-2 lg:col-span-1 p-8 py-12 sm:p-12 overflow-hidden lg:overflow-visible rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <h1 className="text-xl text-center text-gray-600 dark:text-gray-400 font-bold md:text-3xl pb-6">
                <span>What's our clients say</span>
                <span className='text-cyan-700 dark:text-cyan-400'>.</span>
              </h1>
              <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-[212.25px] h-[427.5px]">
                {Testimonial.map((t,i)=>(
                  <SwiperSlide key={i}>
                    <TestimonialCard key={i} info={t} index={i}/>
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
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {Client.map((client, index)=>(
                  <Image key={index} className="w-32 p-4" src={client.logo} alt="client logo" width={100} height={100}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
