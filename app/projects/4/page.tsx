"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Background } from "@/components/background"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const features = [
  {
    title: "LSTM Neural Network",
    description: "Advanced deep learning model for accurate time series prediction of stock prices.",
    icon: "🧠",
  },
  {
    title: "Interactive Dashboard",
    description: "Real-time stock analysis with interactive charts and multiple stock comparison capabilities.",
    icon: "📊",
  },
  {
    title: "Data Preprocessing",
    description: "Robust data normalization and preprocessing pipeline for accurate predictions.",
    icon: "🔄",
  },
  {
    title: "Multiple Stock Analysis",
    description: "Compare and analyze multiple stocks simultaneously with detailed metrics.",
    icon: "📈",
  },
  {
    title: "Technical Indicators",
    description: "Advanced technical analysis tools and indicators for comprehensive stock analysis.",
    icon: "📉",
  },
]

const techStack = [
  { name: "Python", icon: "/icons/python.svg" },
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "Plotly Dash", icon: "/icons/plotly.svg" },
  { name: "NumPy", icon: "/icons/numpy.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
]

export default function StockPredictionProjectPage() {
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
              Stock Market Prediction
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced Stock Price Prediction System using LSTM Neural Networks
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              A sophisticated stock price prediction system that combines deep learning with interactive visualization.
              Built using LSTM neural networks for accurate time series prediction and featuring a comprehensive
              dashboard for real-time stock analysis.
            </p>
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
                <h3 className="text-xl font-semibold mb-2">Stock Price Prediction Model</h3>
                <p className="text-gray-300 mb-4">
                  LSTM neural network model trained on historical stock data to predict future price movements.
                </p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/predict-stock-cost-yxEY5fXyGCU0xW9BKSHqqItxdowbYK.png"
                  alt="Stock Price Prediction Model"
                  width={800}
                  height={400}
                  className="rounded-lg border border-gray-800"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Real-time stock analysis dashboard with multiple visualization options.
                </p>
                <div className="grid gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stock-Price-Prediction-project-dashboard-2-YYrEpmwRSgJuhp1YRBCpAEbJGaPxCj.gif"
                    alt="Stock Analysis Dashboard"
                    width={800}
                    height={400}
                    className="rounded-lg border border-gray-800"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stock-Price-Prediction-project-dashboard-BAHtX1TT6jmejmxSSLNTIDpCo2V6Pe.gif"
                    alt="Stock Price Comparison"
                    width={800}
                    height={400}
                    className="rounded-lg border border-gray-800"
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
                  <li>LSTM neural network for time series prediction</li>
                  <li>Data preprocessing and normalization pipeline</li>
                  <li>Interactive visualization with Plotly Dash</li>
                  <li>Real-time stock data analysis</li>
                  <li>Multiple stock comparison capabilities</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

