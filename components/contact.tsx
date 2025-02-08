"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, Check } from "lucide-react"
import type React from "react" // Import React

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-300, 300], [10, -10])
  const rotateY = useTransform(x, [-300, 300], [-10, 10])

  const [trails, setTrails] = useState<{ x: number; y: number; opacity: number }[]>([])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.x + rect.width / 2
      const centerY = rect.y + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)

      setTrails((prevTrails) => [
        { x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 },
        ...prevTrails.slice(0, 5),
      ])
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setTrails([])
  }

  const copyEmail = async () => {
    const email = "sriramabc30@gmail.com"
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prevTrails) =>
        prevTrails.map((trail) => ({
          ...trail,
          opacity: trail.opacity > 0 ? trail.opacity - 0.1 : 0,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/sriramabc29",
      gradient: "from-[#2D333B] to-[#1D2125]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sri-ram-sampath-kumar-664451199/",
      gradient: "from-[#0077B5] to-[#00A0DC]",
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 p-4 pb-0"
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-6xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/20 via-transparent to-[#00BFFF]/20 rounded-2xl blur-3xl" />
        {trails.map((trail, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#4169E1] to-[#00BFFF] blur-md pointer-events-none"
            style={{
              left: trail.x,
              top: trail.y,
              opacity: trail.opacity,
            }}
          />
        ))}
        <div className="grid lg:grid-cols-2 gap-8 relative bg-gray-900/50 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10">
          {/* Left Column - Get in Touch */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="mt-2 text-gray-400">I'm always open to new opportunities and collaborations.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
              <p className="text-white/80 text-sm leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or just to say hello! I'll get back to you as
                soon as possible. You can use any of the social links or email me directly.
              </p>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="lg:pl-8 lg:border-l border-white/10 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2">
                  Follow Me
                </h3>
                <p className="text-gray-400">Connect with me on social media or send me an email.</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-opacity",
                        social.gradient,
                      )}
                    />
                    <div className="relative flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 border border-white/10 gap-2">
                      <social.icon className="w-6 h-6 text-white" />
                      <span className="text-sm text-white/80">{social.name}</span>
                    </div>
                  </motion.a>
                ))}
                <motion.button
                  onClick={copyEmail}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4169E1] to-[#00BFFF] opacity-0 group-hover:opacity-100 blur transition-opacity" />
                  <div className="relative flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 border border-white/10 gap-2">
                    {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
                    <span className="text-sm text-white/80">{copied ? "Copied!" : "Email"}</span>
                  </div>
                </motion.button>
              </div>

              <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                <p className="text-white/80 text-sm leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or just to say hello! I'll get back to you
                  as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

