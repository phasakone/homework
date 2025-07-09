'use client'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Heading */}
          <div>
            <h1 className="text-4xl font-bold mb-2">📬 Contact Me</h1>
            <p className="text-gray-600">
              Feel free to reach out to me through any of the platforms below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Facebook */}
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:bg-blue-50 transition"
            >
              <FaFacebookF className="text-blue-600 text-2xl" />
              <span className="font-medium text-lg">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:bg-pink-50 transition"
            >
              <FaInstagram className="text-pink-500 text-2xl" />
              <span className="font-medium text-lg">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8562076064934"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:bg-green-50 transition"
            >
              <FaWhatsapp className="text-green-500 text-2xl" />
              <span className="font-medium text-lg">WhatsApp</span>
            </a>

            {/* Gmail */}
            <a
              href="mailto:konelat45@gmail.com"
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:bg-red-50 transition"
            >
              <FaEnvelope className="text-red-500 text-2xl" />
              <span className="font-medium text-lg">Gmail</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

