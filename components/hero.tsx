"use client"

import { useEffect, useState, useRef } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const roles = [
  ["Cloud & DevOps", "Enthusiast"],
  ["Machine Learning", "Engineer"],
  ["Full-Stack", "Developer"],
  ["FinTech", "Developer"],
  ["AI", "Engineer"],
  ["Software", "Engineer"],
  ["Data", "Analyst"],
  ["Front-End", "Developer"],
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout
    const tick = () => {
      const currentRole = roles[roleIndex]
      const fullText = `${currentRole[0]} ${currentRole[1]}`

      setText((prevText) => {
        if (isDeleting) {
          if (prevText.length > 0) {
            return prevText.slice(0, -1)
          } else {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
            return ""
          }
        } else {
          if (prevText.length < fullText.length) {
            return fullText.slice(0, prevText.length + 1)
          } else {
            setIsDeleting(true)
            return prevText
          }
        }
      })

      const nextTickDelay = isDeleting ? 50 : 100
      timer = setTimeout(tick, nextTickDelay)
    }

    timer = setTimeout(tick, 1000)
    return () => clearTimeout(timer)
  }, [roleIndex, isDeleting])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center text-center bg-black overflow-hidden ${inter.className}`}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 128, 0.3) 0%, rgba(0, 0, 0, 0) 50%)`,
          filter: "blur(40px)",
          opacity: 0.8,
          transition: "background 0.3s ease",
        }}
      />
      <div className="space-y-6 px-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-bold metallic-gradient leading-none">SRI RAM</h1>
        <p className="text-xl sm:text-2xl md:text-[2.5rem] leading-none">
          <span className="metallic-gradient">Next-Gen</span>{" "}
          <span className="inline-flex items-center">
            <span className="text-gradient-blue transition-all duration-100 ease-in-out">{text}</span>
          </span>
          <span className="animate-blink">|</span>
        </p>
        <p className="max-w-3xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
          Experienced in building user-centric, AI-powered financial applications using React, Node.js, and Python to
          drive business growth and enhance customer experiences.
        </p>
      </div>
    </section>
  )
}

