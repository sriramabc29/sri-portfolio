"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Background } from "@/components/background"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"

const journeySteps = [
  {
    title: "Bachelor of Computer Application",
    description: "Discovered my passion for technology at SRM University.",
    icon: "🎓",
    date: "2018 - 2021",
    project: {
      id: 4,
      title: "Stock Market Prediction",
      description: "Advanced stock price prediction system using LSTM neural networks.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stock-Price-Prediction-project-dashboard-2-YYrEpmwRSgJuhp1YRBCpAEbJGaPxCj.gif",
    },
  },
  {
    title: "Web Development Course",
    description: "Enrolled in Internshala's course to gain practical skills.",
    icon: "💻",
    date: "2021",
  },
  {
    title: "8Queens Technologies Internship",
    description: "Deepened my understanding of technology and ignited my desire to innovate.",
    icon: "🚀",
    date: "2022",
  },
  {
    title: "IT Administrator at Mithra Infotech",
    description: "Enhanced skills in data management, network administration, and IT operations.",
    icon: "🖥️",
    date: "2023",
  },
  {
    title: "MSc in Computing and Information Systems",
    description: "Pursued advanced studies at the University of Greenwich.",
    icon: "🎓",
    date: "2023 - 2024",
    projects: [
      {
        id: 2,
        title: "FinHealth",
        description: "A cutting-edge financial wellness platform revolutionizing personal finance management.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-page-image-MRztZAdjZ0u9pQ5BMmla0SIsHHOYoq.png",
      },
      {
        id: 3,
        title: "London Musical Tickets",
        description: "A comprehensive ticket booking system for London musicals.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20015500-kT7GrhmIrukN9NmiWpRRmVV62DjtCl.png",
      },
    ],
  },
  {
    title: "JP Morgan Software Engineering Virtual Internship",
    description: "Developed practical skills in software development and data visualization.",
    icon: "📊",
    date: "2024",
  },
  {
    title: "Latest Project: Sri Portfolio",
    description: "Created a modern portfolio showcasing my journey as a Next-Gen Full-Stack Developer.",
    icon: "🌟",
    date: "2024",
    project: {
      id: 1,
      title: "Sri Portfolio",
      description: "A modern portfolio showcasing my journey as a Next-Gen Full-Stack Developer.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2tTVWUcBZQq89YFoHPXHdprJnp2dxu.png",
    },
  },
]

export default function AboutPage() {
  const [showFuture, setShowFuture] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Header />
      <main className="container mx-auto px-4 py-24 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4169E1] to-[#00bfff] text-transparent bg-clip-text">
              My Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            From academic pursuits to professional experiences, here's the path that led me to where I am today.
          </p>

          <div className="relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-16 relative"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl"
                  >
                    {step.icon}
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400">{step.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 ml-16">{step.description}</p>

                {index < journeySteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-blue-500" />
                )}

                {step.project && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 ml-16"
                  >
                    <ProjectCard project={step.project} />
                  </motion.div>
                )}

                {step.projects && (
                  <div className="mt-8 ml-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.projects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: journeySteps.length * 0.1 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFuture(!showFuture)}
                className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center"
              >
                <Plus className="mr-2" />
                {showFuture ? "Hide" : "Show"} Future Projects
              </motion.button>
            </motion.div>

            <AnimatePresence>
              {showFuture && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8"
                >
                  <div className="border-l-2 border-dashed border-blue-500 ml-6 pl-10 py-8">
                    <h3 className="text-2xl font-semibold mb-4">Future Projects</h3>
                    <p className="text-gray-300 mb-4">
                      The journey doesn't end here. I'm always excited about new challenges and opportunities to
                      innovate. Stay tuned for more exciting projects coming soon!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 flex items-center justify-center">
                          <span className="text-4xl">🚀</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-gray-300 mb-4">
              Having recently completed my master's degree and internship, I am eager to explore opportunities at the
              intersection of technology and finance. With a strong background in software engineering, data analysis,
              and cloud computing, I am particularly interested in roles that foster innovation and strategic thinking.
            </p>
            <p className="text-gray-300">
              I am committed to contributing to an organization that values creativity and excellence while continuously
              learning and growing in my career. My journey has equipped me with a unique blend of technical expertise
              and financial insights, positioning me to drive innovation in the fintech sector.
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          <motion.span className="text-blue-400 flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            View Project <ArrowRight className="ml-2 w-4 h-4" />
          </motion.span>
        </div>
      </motion.div>
    </Link>
  )
}

