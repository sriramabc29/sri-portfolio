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
    title: "Bank Account Integration",
    description:
      "Link bank accounts using APIs like Plaid or Yodlee for automatic transaction import and real-time updates.",
    icon: "🏦",
  },
  {
    title: "Expense Tracking",
    description:
      "Smart categorization, custom tags, AI-powered insights, and budget planning with real-time notifications.",
    icon: "📊",
  },
  {
    title: "Financial Health Score",
    description:
      "Personalized score based on spending habits, income stability, debt levels, and savings with improvement suggestions.",
    icon: "📈",
  },
  {
    title: "Goal-Oriented Savings",
    description: "Set and track savings goals with automated contributions and dynamic progress visualization.",
    icon: "🎯",
  },
  {
    title: "Investment Planner",
    description: "Beginner-friendly tutorials, AI-powered portfolio recommendations, and performance tracking.",
    icon: "💼",
  },
  {
    title: "Gamified Financial Literacy",
    description: "Interactive quizzes, rewards system, and risk-free simulated trading environment.",
    icon: "🎮",
  },
  {
    title: "AI-Powered Insights",
    description: "Risk alerts and behavioral nudges to optimize savings and spending habits.",
    icon: "🤖",
  },
  {
    title: "Community Engagement",
    description: "Forums for strategy discussions and mentorship connections with experienced users and advisors.",
    icon: "👥",
  },
  {
    title: "Sustainability Integration",
    description: "Track the carbon footprint of purchases and explore environmentally responsible investment options.",
    icon: "🌿",
  },
]

const techStack = [
  { name: "React Native", icon: "/icons/react-native.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
]

export default function FinHealthProjectPage() {
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
              FinHealth
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">A Financial Wellness and Management Ecosystem</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              FinHealth is a cutting-edge platform designed to revolutionize how individuals manage their finances. This
              project, developed entirely by me, is currently in progress and aims to provide an intuitive user
              experience through advanced financial tools and engaging user interfaces.
            </p>
            <motion.a
              href="https://sriramabc29.github.io/FinHealth/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4169E1] text-white px-6 py-3 rounded-full font-semibold flex items-center"
            >
              Try FinHealth Now! <ArrowRight className="ml-2" />
            </motion.a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
            <p className="text-gray-300 mb-4">
              FinHealth empowers users to take control of their financial journey by offering:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Seamless expense tracking</li>
              <li>Comprehensive financial literacy tools</li>
              <li>Goal-oriented investment planning</li>
              <li>Community-driven support for sustainable financial habits</li>
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
                <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
                <p className="text-gray-300 mb-2">Fully designed with a user-friendly interface.</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-page-image-MRztZAdjZ0u9pQ5BMmla0SIsHHOYoq.png"
                  alt="FinHealth Landing Page"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Login Page</h3>
                <p className="text-gray-300 mb-2">Features secure authentication options.</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login-page-image-aSUmFzpOtwrzecfG5uXygQSPzFswvA.png"
                  alt="FinHealth Login Page"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User Dashboard</h3>
                <p className="text-gray-300 mb-2">Initial designs implemented with dynamic data visualization.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-20%20180145-ksZqSNbBRAHge0ZGKGmAY1NZ9511e0.png"
                    alt="FinHealth User Dashboard - Financial Goals"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-20%20031345-rMjpEGAEEH7jypF5KHNYZSV9WxeeIT.png"
                    alt="FinHealth User Dashboard - Spending Analytics"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
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
                    <div key={index} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                      <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={20} height={20} />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">APIs</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Plaid/Yodlee: Bank account integration</li>
                  <li>Alpha Vantage: Stock market data</li>
                  <li>Firebase: Notifications and authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security Features</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Data Encryption: End-to-end encrypted transmission and storage</li>
                  <li>Two-Factor Authentication: Enhanced login security</li>
                  <li>Privacy Controls: User control over data sharing</li>
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
                  <li>Install Node.js</li>
                  <li>Install React Native CLI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Steps to Run Locally</h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>
                    Clone the repository:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>git clone https://github.com/sriramabc29/FinHealth.git</code>
                    </pre>
                  </li>
                  <li>
                    Navigate to the project directory:
                    <pre className="bg-gray-800 p-2 rounded mt-2 overflow-x-auto">
                      <code>cd FinHealth</code>
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
                      <code>npm start</code>
                    </pre>
                  </li>
                  <div className="mt-6">
                    <motion.a
                      href="https://github.com/sriramabc29/FinHealth/archive/refs/heads/main.zip"
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
            <p className="text-gray-300 mb-4">For questions, feedback, or collaboration, reach out to me:</p>
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
                href="https://github.com/sriramabc29/FinHealth"
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

