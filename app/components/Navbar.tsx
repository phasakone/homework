'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* รูปด้านซ้าย */}
      <div className="flex items-center">
        <Image src="/f3.jpg"
        alt="Logo" 
        width={40}
        height={40} 
        className='w-10 h-10 rounded-full object-cover shadow-lg mb-6'  />
        <span className="ml-2 font-bold text-xl ">MyPortfolio</span>
      </div>

      {/* ปุ่มด้านขวา */}
      <div className="space-x-6 font-medium">
        <Link href="/home" className="hover:text-blue-500 transition">Home</Link>
        <Link href="/skills" className="hover:text-blue-500 transition">Skills</Link>
        <Link href="/about" className="hover:text-blue-500 transition">About</Link>
      </div>
    </nav>
  )
}