'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/common/Nav'
import Header from '@/components/common/Header'
import { SidebarContext } from '@/context/SidebarContext'
import { useState } from 'react'
import { usePathname  } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Resto Man.',
  description: 'our Digital Restaurant Solution.',
}

export default function RootLayout({ children }) {
  const path = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="RestoMan: Restaurant Management System" />
        <meta property="og:description" content="Effortlessly streamline restaurant operations, 
        manage customer insights, and drive growth with RestoMan's intuitive digital solutions." />
        <meta property="og:image" content="/images/logo.png" />
      </head>
      <body className={`${inter.className} body_and_text_color`}>
        <SidebarContext.Provider value={{isSidebarOpen, setSidebarOpen}}>
          {path !== '/' && <Nav/>}
          <div className={path !== '/' && 'ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'}>
            {path !== '/' && <Header/>}
            {children}
          </div>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
