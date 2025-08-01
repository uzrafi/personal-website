'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import freshbooks from './icons/freshbooks.png'
import oriole from './icons/oriole.jpg'
import ExperienceCard from "./components/card"

const experiences = [
  {
    company: "Oriole AI Inc.",
    date: "May 2023 – Aug 2023",
    role: "SWE Intern (Mobile)",
    logo: oriole.src,
  },
  {
    company: "FreshBooks",
    date: "Jan 2024 – Aug 2024",
    role: "SWE Intern (Mobile)",
    logo: freshbooks.src,
  },
  {
    company: "FreshBooks",
    date: "Sept 2024 – Dec 2024",
    role: "SWE Intern (Full-Stack)",
    logo: freshbooks.src,
  },
]

export default function Home() {
  const fullText = "  Hello, nice to meet you!👋"
  const [typed, setTyped] = useState("")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
  let idx = 0
  const handle = setInterval(() => {
    if (idx < fullText.length) {
      setTyped((t) => t + fullText.charAt(idx)) 
      idx++                                     
    } else {
      clearInterval(handle)
      setTimeout(() => setShowContent(true), 300)
    }
  }, 100)
  return () => clearInterval(handle)
}, [])


  return (
    <div className="min-h-screen text-white px-8 py-12 sm:px-20 sm:py-20 flex flex-col items-center">
      {/* typing intro */}
      <div className="w-full max-w-3xl">
        <h1 className="font-bold text-4xl sm:text-5xl mb-2">
          {typed}
          <span className="inline-block w-1 h-8 bg-white ml-1 animate-[blink_1s_steps(1)_infinite]" />
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl flex flex-col gap-16 mt-8"
      >
        {/* intro & links */}
        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pr-10">
          <div>
            <p className="text-lg">
              My name is <strong>Uzair Rafi</strong>, a 5th year student at the University of Guelph. 
              I’ll be graduating in April 2026.
            </p>
            <p className="mt-2 text-sm opacity-75">
              Currently pursuing:
              <br />
              – Fall 2025 Co-ops/Internships
              <br />
              – FT Roles
            </p>
          </div>
          <div className="flex items-center gap-6 pl-12">
            <a
              href="https://drive.google.com/file/d/13OOPFbS5T0NJG7286KBqMXLe0v1wp6oc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-5 py-2 rounded-md text-sm font-medium w-30 hover:bg-white/10 transition"
            >
              My Resume
            </a>
            <a
              href="https://github.com/uzrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/uzairrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        <div className="flex flex-col ">
        <p className="text-base font-semibold">
          My previous work experiences include...
        </p>
        <ExperienceCard experiences={experiences}></ExperienceCard>
      </div>

        {/* contact */}
        <section className="text-center mar">
          <p className="mb-4 text-lg">Let’s get in touch!</p>
          <a
            href="mailto:uzairrafi159@gmail.com"
            className="inline-block border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
          >
            Contact My Email
          </a>
        </section>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
