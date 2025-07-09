'use client'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Heading */}
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-2">👨‍💻 About Me</h1>
            <p className="text-lg text-gray-600">
              Front-End Developer with 5+ years of experience in web design and development.
            </p>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🧾 Summary</h2>
            <p>
              I'm a front-end developer proficient in React, JavaScript, and UI implementation.
              I have a strong analytical mindset, enjoy solving problems, and am a collaborative team player
              with a creative eye and attention to detail.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🛠️ Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Web Design, Design Thinking</li>
              <li>Front-End Coding: HTML, CSS, JavaScript, React.js</li>
              <li>Back-End: Node.js, Express.js</li>
              <li>Database: MySQL</li>
              <li>Tools: VS Code, Git</li>
              <li>Problem Solving & Strong Communication</li>
            </ul>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">💼 Experience</h2>
            <div>
              <p className="font-medium">Freelance Web Developer (2022 - Present)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Designed and developed websites for small businesses</li>
                <li>Built responsive UIs with React.js</li>
                <li>Improved performance and load speed using best practices</li>
                <li>Integrated contact forms and basic backend with Node.js and Express</li>
                <li>Collaborated with clients for custom web solutions</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
            <p className="mb-1">Institute of Information Technology</p>
            <p>Bachelor of Technology, 2022 - 2026</p>
          </section>

          {/* Workshops */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📚 Workshop & Training</h2>
            <p>APANIC Training Course</p>
            <p>IPv6 Deployment</p>
          </section>

          {/* Language */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🌐 Languages</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Lao: 99%</li>
              <li>Thai: 80%</li>
              <li>English: 20%</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📞 Contact</h2>
            <p>📍 Xaysettha, Vientiane</p>
            <p>📧 konelat45@gmail.com</p>
            <p>📱 +856-20-76064934</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
