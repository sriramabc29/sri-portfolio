"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Inter } from "next/font/google"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
})

const projects = [
  {
    id: 1,
    title: "Sri Portfolio",
    description:
      "A modern portfolio showcasing my journey as a Next-Gen Full-Stack Developer. Built with Next.js 14, featuring interactive animations, glass-morphism effects, and responsive design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2tTVWUcBZQq89YFoHPXHdprJnp2dxu.png",
    slug: "sri-portfolio",
  },
  {
    id: 2,
    title: "FinHealth",
    description:
      "A cutting-edge financial wellness platform revolutionizing personal finance management. Features include AI-powered expense tracking, financial health scoring, and investment planning.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-page-image-MRztZAdjZ0u9pQ5BMmla0SIsHHOYoq.png",
    slug: "finhealth",
  },
  {
    id: 3,
    title: "London Musical Tickets",
    description:
      "A comprehensive ticket booking system for London musicals, featuring real-time seat selection, secure payment processing, and automated email confirmations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20015500-kT7GrhmIrukN9NmiWpRRmVV62DjtCl.png",
    slug: "london-musical-tickets",
  },
  {
    id: 4,
    title: "Stock Market Prediction",
    description:
      "Advanced stock price prediction system using LSTM neural networks, providing accurate forecasting through deep learning algorithms and technical analysis.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stock-Price-Prediction-project-dashboard-2-YYrEpmwRSgJuhp1YRBCpAEbJGaPxCj.gif",
    slug: "stock-market-prediction",
  },
]

export function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const projectTransforms = projects.map((project, index) => {
    return {
      y: useTransform(scrollYProgress, [index / projects.length, (index + 1) / projects.length], ["100%", "0%"]),
      opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]),
      scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]),
      rotate: useTransform(scrollYProgress, [0, 1], [10, 0]),
    }
  })

  return (
    <section className={`py-12 ${inter.className} relative`} id="projects">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 128, 0.3) 0%, rgba(0, 0, 0, 0) 50%)`,
          filter: "blur(40px)",
          opacity: 0.8,
          transition: "background 0.3s ease",
        }}
      />
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto text-center mb-12
        transform transition-all duration-1000 ease-out
        ${inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extralight tracking-normal mb-6">
          <span className="metallic-gradient">Featured</span>{" "}
          <span className="bg-gradient-to-r from-[#4169E1] to-[#00bfff] text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="text-[#888888] text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
          A selection of outstanding projects showcasing my technical expertise, skill and impact-driven solutions.
        </p>
      </div>

      <div className="mt-8 relative h-[300vh]" ref={containerRef}>
        <div className="sticky top-0 min-h-screen pt-20 px-4 flex items-center justify-center overflow-hidden">
          <div className="relative max-w-[1200px] w-full h-[600px]">
            {projects.map((project, index) => {
              const { y, opacity, scale, rotate } = projectTransforms[index]

              return (
                <Link href={`/projects/${project.id}`} key={project.id}>
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      y,
                      opacity,
                      scale,
                      rotate,
                      zIndex: index + 1,
                    }}
                    className="px-4 sm:px-8"
                  >
                    <motion.div
                      className="w-full bg-[rgba(20,20,23,0.75)] backdrop-blur-lg border border-white/5 rounded-[20px] overflow-hidden shadow-2xl"
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="p-6 sm:p-10">
                        <motion.h3
                          className="text-2xl sm:text-3xl font-light text-white mb-4"
                          initial={false}
                          whileHover={{ x: 10 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl leading-relaxed">
                          {project.description}
                        </p>
                        <motion.div
                          className="aspect-[2/1] w-full relative rounded-lg overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

