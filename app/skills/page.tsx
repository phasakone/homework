'use client'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
export default function SkillsPage() {
  return (
    
    <>
    <Navbar/>
    <main className="min-h-screen px-4 py-10 bg-gray-50 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🛠️ My Skills</h1>
      <p className="text-gray-600 max-w-xl mb-10">
        นี่คือลิสต์ทักษะด้านเทคนิคและเครื่องมือที่ผมถนัด และใช้งานจริงในโปรเจคต่างๆ
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full text-left">
        {/* Frontend */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Frontend</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>HTML5 / CSS3</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Backend</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Firebase</li>
            
            <li>REST API</li>
          </ul>
        </div>

        {/* Tools & Others */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Tools & Other</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Git / GitHub</li>
         
            <li>VS Code</li>
          
          </ul>
        </div>
      </div>
      
    </main>
    <Footer/>
    </>
    
  )
}
