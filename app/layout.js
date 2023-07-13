'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/common/Nav'
import Header from '@/components/common/Header'
import { SidebarContext } from '@/context/SidebarContext'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${inter.className} body_and_text_color`}>
      <SidebarContext.Provider value={{isSidebarOpen, setSidebarOpen}}>
          <Nav/>
          <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Header/>
            {children}
          </div>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
