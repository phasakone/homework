import Image from 'next/image'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './home/page'
export default function Home() {
   return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10 text-center">
          {/* Profile Picture */}
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
            <Image
              src="/f2.jpg"
              alt="My Profile"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
  
          {/* Introduction */}
          <h1 className="text-3xl font-bold mb-3">👋 Hello, I'm Phasakone</h1>
          <p className="text-gray-700 max-w-xl mb-6">
            I'm a passionate Web Developer who loves building beautiful and user-friendly websites.
            I have experience in both frontend and backend development.
            My specialties include Next.js, React, and Tailwind CSS, and I also have basic knowledge of UX/UI design.
            <br /><br />
            I believe that "learning never ends" and I always strive to improve myself
            through online courses, real-world projects, and collaborating with other developers in workshops.
          </p>
  
          {/* Contact Button */}
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition mb-10"
          >
            Contact Me
          </a>
  
          {/* Skills Section */}
          <section className="text-left w-full max-w-3xl bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">💡 My Skills</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Frontend: React.js, Next.js, Tailwind CSS, HTML, CSS, JavaScript</li>
              <li>Backend: Node.js, Express.js, Firebase, Supabase</li>
              <li>Design: Figma, Basic UX/UI</li>
              <li>Others: Git, GitHub, Responsive Design, Agile</li>
            </ul>
          </section>
  
          {/* Quote */}
          <blockquote className="italic text-gray-600 mt-10 max-w-md">
            "Opportunities don’t happen by luck; they are the result of preparation and effort."
          </blockquote>
        </main>
  
        <Footer />
      </>
    )
}
