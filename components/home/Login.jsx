import React from 'react'
import Link from "next/link";

export default function Login() {
  return (
    <section className="container_gap h-screen">
        <h1 className="mb-6 text-center text-7xl">Home</h1>
        <div className="container_layout2 w-fit">
        <Link href={'/dashboard'}>dashboard</Link>
        </div>
    </section>
  )
}
