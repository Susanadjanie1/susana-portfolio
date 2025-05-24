import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">Susana Djanie</h1>
        <div className="space-x-4 text-sm">
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#experience" className="hover:text-indigo-600">Experience</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
        <div className="max-w-xl text-center lg:text-left">
          <motion.h2 
            className="text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}>
            Hi, I'm Susana —
            <br />
            Frontend Developer with a Business Edge
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600">
            I specialize in crafting intuitive and responsive web apps using React and Next.js.
            With a background in business administration, I bring both technical skill and strategic thinking to every project.
          </p>
          <div className="mt-6 space-x-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow">
              View Projects
            </a>
            <a href="mailto:susanadjanie1@gmail.com" className="text-indigo-600 hover:underline text-sm">
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm mb-8 lg:mb-0">
          <img src="/Susana_portfolio.jpeg" alt="Susana Djanie" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm a passionate frontend developer with experience building full-stack web applications during internships and bootcamps. My toolkit includes HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and MongoDB. With a strong foundation in design principles and a business mindset, I build scalable, user-centric applications that solve real-world problems.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Everything Technology - Frontend Intern</h3>
            <p className="text-sm text-gray-500">April 2025 – May 2025, Tema</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Built and deployed a full-stack project management app using Next.js, Tailwind CSS, MongoDB, and JWT.</li>
              <li>Implemented role-based access control and real-time task comments.</li>
              <li>Improved remote teamwork through asynchronous coordination and virtual updates.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">R. A Codjoe Law Offices – Administrator</h3>
            <p className="text-sm text-gray-500">Jan 2024 – Dec 2024, Accra</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Managed daily office operations and data entry processes.</li>
              <li>Handled communications and maintained organized records.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">CTIW Foundation – Administrator/Financial Assistant</h3>
            <p className="text-sm text-gray-500">Nov 2022 – Nov 2023, Accra</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Coordinated administrative activities and clerical tasks.</li>
              <li>Managed calls and emails, demonstrating excellent communication skills.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-6">I'm open to internship or junior frontend roles, freelance projects, or collaborations. Let’s build something great together!</p>
        <a href="mailto:susanadjanie1@gmail.com" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow">
          Email Me
        </a>
        <div className="mt-6 space-x-4 text-sm">
          <a href="https://www.linkedin.com/in/susana-djanie/" className="text-indigo-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/Susanadjanie1" className="text-indigo-600 hover:underline">GitHub</a>
          <a href="/Susana Djanie_Resume.pdf" className="text-indigo-600 hover:underline">Download Resume</a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} Susana Djanie. All rights reserved.
      </footer>
    </main>
  );
}
