"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Background } from "@/components/background"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight, Github, ExternalLink } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

const techStack = [
  { name: "React Native", icon: "/icons/react-native.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Framer Motion", icon: "/icons/framer-motion.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Java Swing", icon: "/icons/java.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
  { name: "NumPy", icon: "/icons/numpy.svg" },
  { name: "Plotly Dash", icon: "/icons/plotly.svg" },
]

const projects = [
  {
    id: 1,
    title: "Sri Portfolio",
    description:
      "A modern portfolio showcasing my journey as a Next-Gen Full-Stack Developer. Built with Next.js 14, featuring interactive animations, glass-morphism effects, and responsive design. Includes sections for experience, projects, and a dynamic blog.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2tTVWUcBZQq89YFoHPXHdprJnp2dxu.png",
    date: "December 16, 2024",
    author: {
      name: "Sri Ram",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    techStack: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Framer Motion", icon: "/icons/framer-motion.svg" },
    ],
    links: {
      github: "https://github.com/sriramabc29/sri-portfolio",
    },
  },
  {
    id: 2,
    title: "Finhealth",
    description: `A cutting-edge financial wellness platform revolutionizing personal finance management. Features include bank account integration with Plaid/Yodlee APIs, AI-powered expense tracking, financial health scoring, goal-oriented savings, and investment planning. Built with React Native, Node.js, and PostgreSQL, incorporating machine learning for intelligent insights.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-page-image-MRztZAdjZ0u9pQ5BMmla0SIsHHOYoq.png",
    date: "December 15, 2024",
    author: {
      name: "Sri Ram",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    features: [
      "Bank Account Integration with OAuth 2.0",
      "AI-Powered Expense Tracking",
      "Financial Health Score",
      "Goal-Oriented Savings",
      "Investment Planner",
      "Gamified Financial Literacy",
    ],
    links: {
      github: "https://github.com/sriramabc29/FinHealth",
      linkedin: "https://linkedin.com/in/sriramabc30",
      email: "sriramabc30@gmail.com",
    },
    techStack: [
      { name: "React Native", icon: "/icons/react-native.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
    ],
  },
  {
    id: 3,
    title: "London Musical Tickets",
    description:
      "A comprehensive ticket booking system built with Java, featuring real-time seat selection, secure payment processing, and automated email confirmations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20015500-kT7GrhmIrukN9NmiWpRRmVV62DjtCl.png",
    date: "December 14, 2024",
    author: {
      name: "Sri Ram",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    techStack: [
      { name: "Java", icon: "/icons/java.svg" },
      { name: "Java Swing", icon: "/icons/java.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
    ],
    links: {
      github: "https://github.com/sriramabc29/Londonmusicaltickets",
    },
  },
  {
    id: 4,
    title: "Stock Market Prediction",
    description:
      "Advanced stock price prediction system using LSTM neural networks, providing accurate forecasting through deep learning algorithms and technical analysis.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stock-Price-Prediction-project-dashboard-2-YYrEpmwRSgJuhp1YRBCpAEbJGaPxCj.gif",
    date: "December 13, 2024",
    author: {
      name: "Sri Ram",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    techStack: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
      { name: "Pandas", icon: "/icons/pandas.svg" },
      { name: "NumPy", icon: "/icons/numpy.svg" },
      { name: "Plotly Dash", icon: "/icons/plotly.svg" },
    ],
  },
]

const certifications = [
  {
    title: "Software Engineering Virtual Experience",
    organization: "J.P. Morgan Chase & Co., Forage",
    date: "Sep 2024",
    status: "Completed",
    details: [
      "Configured a local development environment using Git, Python, and TypeScript, setting up essential tools to streamline workflow.",
      "Resolved repository issues with React and technical communication skills, ensuring accurate web application output and improved user functionality.",
      "Leveraged J.P. Morgan's Perspective library to create a live data visualization graph, enhancing financial data insights and supporting trade monitoring.",
    ],
    certificateLink:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_hiBv6s8ZiGatsrMXg_1726917602991_completion_certificate.pdf",
  },
  {
    title: "Web Development Training",
    organization: "Internshala, NSDC Certified",
    date: "Dec 2021",
    status: "Completed",
    details: [
      "Acquired comprehensive full-stack web development skills, including HTML, CSS, JavaScript, Bootstrap, DBMS, and PHP.",
      "Learned to create responsive web pages, design user-friendly interfaces, and ensure web accessibility.",
      "Developed proficiency in SQL database management and PHP-based backend development.",
      "Gained hands-on experience with responsive design techniques, including Flexbox and media queries.",
    ],
    certificateLink:
      "https://trainings.internshala.com/view_certificate/C8ED4A08-F094-C96D-5DC6-D4591F4C2B1B/D312E06E-1EE6-970F-49AB-D993C37CD340/",
  },
  {
    title: "AWS Certified AI Practitioner",
    organization: "Amazon Web Services",
    date: "2025",
    status: "Ongoing",
    details: [
      "Gaining expertise in artificial intelligence (AI), machine learning (ML), and generative AI concepts.",
      "Understanding AI-driven solutions and real-world applications across industries.",
      "Building knowledge of AI ethics and best practices to ensure responsible implementation of AI technologies.",
      "Exploring AWS AI services like SageMaker, Rekognition, and Comprehend to create scalable, intelligent systems.",
      "Enhancing career prospects with in-demand AI/ML skills validated by AWS.",
    ],
  },
  {
    title: "Python Programming Course",
    organization: "Internshala, NSDC Certified",
    date: "2025",
    status: "Ongoing",
    details: [
      "Developed a strong foundation in Python programming, covering syntax, data structures, and object-oriented programming (OOP).",
      "Built Graphical User Interfaces (GUI) using PyQt5, creating interactive applications with event-driven programming.",
      "Worked on a capstone project—a Fantasy Cricket League game, applying Python concepts to game logic, scoring, and database management.",
      "Equipped with skills for roles like Python Developer, Data Analyst, Software Engineer, and Machine Learning Engineer.",
    ],
  },
]

export default function ProjectsPage() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    if (newDirection > 0 && page < projects.length - 1) {
      setPage([page + 1, newDirection])
    } else if (newDirection < 0 && page > 0) {
      setPage([page - 1, newDirection])
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Background />
      <Header />
      <main className="container mx-auto px-4 py-24 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl metallic-gradient mb-4 pt-8 font-light tracking-wide text-center">Projects</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Hands on experience to{" "}
              <span className="bg-gradient-to-r from-[#4169E1] to-[#00bfff] text-transparent bg-clip-text">
                know me!
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                disabled={page === 0}
              >
                <ChevronLeft className="w-6 h-6 text-white/70" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                disabled={page === projects.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-white/70" />
              </button>
            </div>
          </div>

          <div className="relative h-[600px] overflow-hidden pb-0">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <motion.article
                  className="grid md:grid-cols-2 gap-8 bg-[rgba(20,20,23,0.75)] backdrop-blur-lg rounded-[20px] overflow-hidden border border-white/5 p-8"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#4169E1]">
                    <Image
                      src={projects[page].image || "/placeholder.svg"}
                      alt={projects[page].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-[500] text-white mb-4">{projects[page].title}</h3>
                      <div className="flex items-center gap-3 mb-4">
                        <Image
                          src={projects[page].author.avatar || "/placeholder.svg"}
                          alt={projects[page].author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div className="text-sm font-[500]">
                          <span className="text-[#767676]">by </span>
                          <span className="text-white">{projects[page].author.name}</span>
                          <p className="text-[#767676]">{projects[page].date}</p>
                        </div>
                      </div>
                      <p className="text-[#767676] text-sm mb-6 font-[500] line-clamp-3">
                        {projects[page].description}
                      </p>

                      {projects[page].techStack && (
                        <div className="mb-6">
                          <h4 className="text-white text-sm font-semibold mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-4">
                            {projects[page].techStack.map((tech, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Image
                                  src={tech.icon || "/placeholder.svg"}
                                  alt={tech.name}
                                  width={20}
                                  height={20}
                                  className="filter brightness-75"
                                />
                                <span className="text-[#767676] text-xs">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <Link href={`/projects/${projects[page].id}`} passHref>
                        <motion.a
                          className="px-6 py-2 rounded-full bg-white/5 text-white text-sm font-[500] hover:bg-white/10 transition-colors flex items-center gap-2"
                          whileHover={{ x: 5 }}
                        >
                          Continue Reading
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      </Link>
                      {projects[page].links?.github && (
                        <a
                          href={projects[page].links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#767676] hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Certifications & Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20"
          >
            <h2 className="text-4xl metallic-gradient mb-8 font-light tracking-wide text-center">
              Certifications & Achievements
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[rgba(20,20,23,0.75)] backdrop-blur-lg rounded-[20px] overflow-hidden border border-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-[#767676] mb-2">{cert.organization}</p>
                  <p className="text-[#767676] mb-4">
                    {cert.date} •{" "}
                    <span className={cert.status === "Completed" ? "text-green-500" : "text-yellow-500"}>
                      {cert.status}
                    </span>
                  </p>
                  <ul className="list-disc list-inside text-[#767676] mb-4">
                    {cert.details.map((detail, idx) => (
                      <li key={idx} className="mb-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {cert.certificateLink && (
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

