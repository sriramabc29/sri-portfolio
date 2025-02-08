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
    title: "Interactive Musical Show Grid",
    description: "Browse and select from a variety of popular London musicals with detailed show information.",
    icon: "🎭",
  },
  {
    title: "Advanced Search and Filter",
    description: "Filter shows by genre, rating, and age recommendation with instant search functionality.",
    icon: "🔍",
  },
  {
    title: "Intuitive Booking Flow",
    description: "Streamlined booking process with easy date and time selection interface.",
    icon: "📅",
  },
  {
    title: "Ticket Type Selection",
    description: "Flexible ticket options with special discounts for children and seniors.",
    icon: "🎟️",
  },
  {
    title: "Detailed Receipt Generation",
    description: "Automatic generation of comprehensive booking receipts with all relevant details.",
    icon: "🖨️",
  },
]

const techStack = [
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Java Swing", icon: "/icons/java.svg" },
  { name: "Custom UI", icon: "/icons/ui.svg" },
  { name: "Dark Theme", icon: "/icons/theme.svg" },
]

export default function LondonMusicalProjectPage() {
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
              London Musical Tickets
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">A Modern Ticket Booking System for London Musicals</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              A modern, professional Java Swing application for booking musical tickets in London, featuring a sleek
              dark-themed interface and comprehensive booking functionality. The system provides an intuitive way to
              browse, select, and book tickets for popular London musicals.
            </p>
            <motion.a
              href="https://github.com/sriramabc29/london-musical-tickets"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4169E1] text-white px-6 py-3 rounded-full font-semibold flex items-center"
            >
              View Project <ArrowRight className="ml-2" />
            </motion.a>
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
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Musical Selection Interface</h3>
                <p className="text-gray-300 mb-4">
                  Browse through a variety of popular London musicals with detailed information and pricing.
                </p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20210459-7pEDuL1Vpmv32Fm95w4EvhTvZB6M10.png"
                  alt="London Musical Tickets - Show Selection"
                  width={800}
                  height={400}
                  className="rounded-lg border border-gray-800"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Booking Schedule</h3>
                <p className="text-gray-300 mb-4">Interactive calendar interface for selecting show dates and times.</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-21%20041510-1VuCA15iyw7tSA6zOaV8ZOox6NSMzW.png"
                  alt="London Musical Tickets - Schedule Selection"
                  width={800}
                  height={400}
                  className="rounded-lg border border-gray-800"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ticket Selection</h3>
                <p className="text-gray-300 mb-4">
                  Flexible ticket type selection with special discounts for different age groups.
                </p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-21%20041529-A6JcH967Z82DpPdv7oc1LdE4rMd5VN.png"
                  alt="London Musical Tickets - Ticket Selection"
                  width={800}
                  height={400}
                  className="rounded-lg border border-gray-800"
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
                <h3 className="text-xl font-semibold mb-2">Implementation Details</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Built with Java Swing for robust desktop application development</li>
                  <li>Custom UI components for enhanced user experience</li>
                  <li>Dark theme design for reduced eye strain</li>
                  <li>Efficient data management using JSON for show listings</li>
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
                  <li>Java Development Kit (JDK) 8 or higher</li>
                  <li>NetBeans IDE (recommended)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Installation Steps</h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>
                    Clone the repository:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>git clone https://github.com/sriramabc29/london-musical-tickets.git</code>
                    </pre>
                  </li>
                  <li>Open the project in NetBeans IDE</li>
                  <li>Configure JDK in project properties</li>
                  <li>Run the application</li>
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
                href="https://github.com/sriramabc29/london-musical-tickets"
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

