'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/common/Nav'
import Header from '@/components/common/Header'
import { SidebarContext } from '@/context/SidebarContext'
import { useState } from 'react'
import { usePathname  } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const path = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
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
