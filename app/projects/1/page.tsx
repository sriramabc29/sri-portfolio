"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Background } from "@/components/background"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, ArrowLeft } from "lucide-react"

const features = [
  {
    title: "Interactive UI",
    description: "Engaging user interface with smooth animations and transitions for an immersive experience.",
    icon: "🎨",
  },
  {
    title: "Responsive Design",
    description: "Fully responsive layout ensuring optimal viewing experience across all devices and screen sizes.",
    icon: "📱",
  },
  {
    title: "Dynamic Content",
    description: "Real-time content updates and dynamic rendering for a seamless user experience.",
    icon: "🔄",
  },
  {
    title: "Project Showcase",
    description: "Detailed project pages highlighting key features, technologies used, and development process.",
    icon: "💼",
  },
  {
    title: "Blog Integration",
    description: "Integrated blog section for sharing insights, tutorials, and industry trends.",
    icon: "📝",
  },
  {
    title: "Contact Form",
    description: "Interactive contact form with real-time validation for easy communication.",
    icon: "📧",
  },
  {
    title: "SEO Optimization",
    description: "Implemented SEO best practices to improve visibility and ranking in search engines.",
    icon: "🔍",
  },
  {
    title: "Performance Optimization",
    description: "Optimized for fast loading times and smooth performance across all sections.",
    icon: "⚡",
  },
  {
    title: "Accessibility",
    description: "Designed with accessibility in mind, ensuring usability for all users.",
    icon: "♿",
  },
]

const techStack = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Framer Motion", icon: "/icons/framer-motion.svg" },
  { name: "Vercel", icon: "/icons/vercel.svg" },
]

export default function SriPortfolioProjectPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Header />
      <main className="container mx-auto px-4 py-24 bg-black">
        <Link href="/projects" passHref>
          <motion.a
            className="inline-flex items-center px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-200 mb-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </motion.a>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4169E1] to-[#00bfff] text-transparent bg-clip-text">
              Sri Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">A Modern Full-Stack Developer Portfolio Showcase</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              Sri Portfolio is a modern, interactive website showcasing my journey as a Next-Gen Full-Stack Developer.
              Built with Next.js 14, it features engaging animations, glass-morphism effects, and a responsive design
              that adapts seamlessly to all devices.
            </p>
            <motion.a
              href="https://sri-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4169E1] text-white px-6 py-3 rounded-full font-semibold flex items-center"
            >
              Visit Sri Portfolio <ArrowRight className="ml-2" />
            </motion.a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
            <p className="text-gray-300 mb-4">
              Sri Portfolio serves as a comprehensive showcase of my skills, projects, and professional journey. It aims
              to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Highlight my technical expertise and project experience</li>
              <li>Provide an interactive platform for potential employers and clients</li>
              <li>Demonstrate my proficiency in modern web development technologies</li>
              <li>Share insights and knowledge through an integrated blog section</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Progress</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Experience Section</h3>
                <p className="text-gray-300 mb-2">
                  Interactive experience timeline with company details and achievements.
                </p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20172157-NY0rWd7O4YtHmNCh2MyIluLOwSPAOK.png"
                  alt="Sri Portfolio Career Experience Section"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
                <p className="text-gray-300 mb-2">Modern contact form with social media integration.</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B9wUTfFhYOPB5K0vvD9lYTmWS4UJM5.png"
                  alt="Sri Portfolio Contact Form"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <p className="text-gray-300 mb-2">Comprehensive skills showcase with categorized technologies.</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWuJysVB2ab3JdzJRRnqctZ6DAfn91.png"
                  alt="Sri Portfolio Technical Skills"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700"
                    >
                      <div className="w-5 h-5 relative">
                        <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                      </div>
                      <span className="text-sm text-gray-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Technologies</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Next.js 14 with App Router for optimized routing and server-side rendering</li>
                  <li>Framer Motion for smooth animations and transitions</li>
                  <li>Tailwind CSS for responsive and customizable styling</li>
                  <li>TypeScript for enhanced type safety and developer experience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Optimizations</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Image optimization using Next.js Image component</li>
                  <li>Code splitting and lazy loading for improved load times</li>
                  <li>Server-side rendering and static generation for faster initial page loads</li>
                  <li>Efficient state management using React hooks</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Node.js (v14 or later)</li>
                  <li>npm or yarn package manager</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Steps to Run Locally</h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>
                    Clone the repository:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>git clone https://github.com/sriramabc29/sri-portfolio.git</code>
                    </pre>
                  </li>
                  <li>
                    Navigate to the project directory:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>cd sri-portfolio</code>
                    </pre>
                  </li>
                  <li>
                    Install dependencies:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>npm install</code>
                    </pre>
                  </li>
                  <li>
                    Start the development server:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>npm run dev</code>
                    </pre>
                  </li>
                  <div className="mt-6">
                    <motion.a
                      href="https://github.com/sriramabc29/sri-portfolio/archive/refs/heads/main.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-[#4169E1] text-white text-sm font-medium hover:bg-[#4169E1]/90 transition-colors duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Download ZIP
                    </motion.a>
                  </div>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 mb-4">
              For questions, feedback, or collaboration opportunities, reach out to me:
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/sriramabc30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4169E1] hover:text-[#00bfff]"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/sriramabc29/sri-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4169E1] hover:text-[#00bfff]"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

