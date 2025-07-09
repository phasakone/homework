export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-6 mt-10 border-t">
      <p className="text-gray-600 text-sm">
        © 2025 Phasakone. All rights reserved.
      </p>
      <div className="mt-2 space-x-4 text-blue-500 text-sm">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="mailto:your@email.com" className="hover:underline">
          Email
        </a>
      </div>
    </footer>
  )
}
