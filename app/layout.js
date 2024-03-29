'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/common/Nav';
import Header from '@/components/common/Header';
import { SidebarContext } from '@/context/SidebarContext';
import useSystemTheme from '@/hooks/useSystemTheme';
import { useState } from 'react';
import { usePathname  } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const theme = useSystemTheme();
  const scrollbar = `${theme === 'dark' ? 'dark-theme' : 'light-theme'}`;
  const path = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <title>Resto Man.</title>
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="RestoMan: Restaurant Management System" />
        <meta property="og:description" content="The ultimate digital restaurant solution, simplifying operations, enhancing efficiency, and elevating dining experiences seamlessly." />
        <meta property="og:image" content="/logos/rm_mini_mix.png" />
      </head>
      <body className={` ${inter.className} ${scrollbar} body_and_text_color`}>
        <SidebarContext.Provider value={{isSidebarOpen, setSidebarOpen}}>
          {path !== '/' && path !== '/purchase' && path !== '/takeOrder' && <Nav/>}
          <div className={path !== '/' &&  path !== '/purchase' && path !== '/takeOrder' && 'ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'}>
            {path !== '/' &&  path !== '/purchase' &&  path !== '/takeOrder' && <Header/>}
            {children}
          </div>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
