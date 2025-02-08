"use client"

import { motion } from "framer-motion"
import { X, Download, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import type React from "react"
import { useState } from "react"

interface CVProps {
  onClose: () => void
}

const CV: React.FC<CVProps> = ({ onClose }) => {
  const [scale, setScale] = useState(1)

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2))
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5))
  const resetZoom = () => setScale(1)

  const handleDownload = () => {
    const downloadLink =
      "https://drive.usercontent.google.com/u/0/uc?id=1Iy2Q_2BlrCahdjYi_esjBDPF_sOKFnDP&export=download"
    window.open(downloadLink, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">CV - Sri Ram</h2>
          <div className="flex items-center space-x-4">
            <button onClick={zoomOut} className="p-2 hover:bg-gray-700 rounded">
              <ZoomOut size={20} />
            </button>
            <button onClick={resetZoom} className="p-2 hover:bg-gray-700 rounded">
              <RotateCw size={20} />
            </button>
            <button onClick={zoomIn} className="p-2 hover:bg-gray-700 rounded">
              <ZoomIn size={20} />
            </button>
            <button onClick={handleDownload} className="p-2 hover:bg-gray-700 rounded">
              <Download size={20} />
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="flex-1 overflow-auto bg-white p-8">
          <div
            className="cv-content max-w-4xl mx-auto"
            style={{ transform: `scale(${scale})`, transformOrigin: "top center", transition: "transform 0.3s ease" }}
          >
            <h1 className="text-4xl font-bold mb-2 text-gray-800">SRIRAM</h1>
            <p className="text-sm text-gray-600 mb-4">
              github.com/sriramabc29 • linkedin.com/sriramabc30 • Chennai • +91 9360271587 • sriramabc30@gmail.com
            </p>
            <p className="text-sm text-gray-700 mb-6">
              Aspiring FinTech Developer, Machine Learning Engineer, and Software Engineer with a strong foundation in
              AI, financial applications, and full-stack development. Passionate about solving real-world financial
              challenges using cutting-edge technology. Highly adaptable and eager to collaborate, innovate, and
              continuously upskill in AI-driven solutions, predictive analytics, and scalable software architectures.
              Seeking opportunities to contribute to tech-driven financial solutions while growing within a dynamic and
              forward-thinking organization.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800 border-b border-gray-300">Education</h2>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">UNIVERSITY OF GREENWICH</h3>
                <span className="text-gray-600">LONDON, UK</span>
              </div>
              <div className="flex justify-between items-baseline text-sm">
                <p className="text-gray-600 italic">Master's in computing & information systems</p>
                <span className="text-gray-600">JAN 2025</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>Expected First class with Distinction.</li>
                <li>Projects: Fin health-financial wellness Application</li>
                <li>Project Management, System Designs, Software Tools & Techniques.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">SRM UNIVERSITY</h3>
                <span className="text-gray-600">CHENNAI, INDIA</span>
              </div>
              <div className="flex justify-between items-baseline text-sm">
                <p className="text-gray-600 italic">Bachelor's in computer application</p>
                <span className="text-gray-600">JUL 2023</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>First Class with Distinction</li>
                <li>UI/UX Design, Web Development, System Modelling.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800 border-b border-gray-300">Experience</h2>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">IT Administrator | MITHRA INFOTECH</h3>
                <span className="text-gray-600">Chennai, India</span>
              </div>
              <p className="text-sm text-gray-600 italic">JUN 2023 – OCT 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Boosted project completion rate by 25% through technical support and training for 30+ staff, reducing
                  downtime by 30% and enhancing productivity.
                </li>
                <li>
                  Managed IT infrastructure, including 30+ network systems and 8 servers, maintaining 60% uptime with
                  proactive maintenance and troubleshooting.
                </li>
                <li>
                  Ensured data protection for 200+ users, implementing security protocols and encryption standards to
                  safeguard sensitive information.
                </li>
                <li>
                  Automated system monitoring and error detection, reducing manual intervention by 40%, improving
                  efficiency, and enhancing network stability.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">Full Stack Intern | 8 QUEENS TECHNOLOGIES</h3>
                <span className="text-gray-600">Chennai, India</span>
              </div>
              <p className="text-sm text-gray-600 italic">NOV 2022 – APR 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Developed and optimized backend solutions using PHP, DBMS, and JavaScript, enhancing application load
                  times by 40%, which improved user experience and engagement.
                </li>
                <li>
                  Collaborated with the frontend team utilizing HTML, CSS, Bootstrap, and React to integrate seamless
                  backend functionality, resulting in a 30% increase in development efficiency.
                </li>
                <li>
                  Implemented secure database management practices, ensuring data integrity and reliability, supporting
                  scalability and reducing downtime by 20%.
                </li>
                <li>
                  Designed REST APIs for cross-platform integration, facilitating efficient data exchange between
                  microservices and improving system communication.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800 border-b border-gray-300">Projects</h2>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">FINANCIAL WELLNESS WEB APP</h3>
                <span className="text-gray-600">Dec 2024</span>
              </div>
              <p className="text-sm text-gray-600 italic">REACT NATIVE, NODE.JS, JAVA SCRIPT, PYTHON (LIVE)</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Developed a comprehensive financial management application enabling users to track expenses, manage
                  investments, and improve financial literacy.
                </li>
                <li>
                  Designed and implemented a dashboard that integrates real-time bank data using Plaid/Yodlee APIs,
                  offering transaction insights and financial health scoring.
                </li>
                <li>
                  Built an investment module allowing users to manage assets, set financial goals, and track portfolio
                  performance through demat account integration.
                </li>
                <li>
                  Created a gamified financial literacy module featuring quizzes and challenges, encouraging user
                  engagement and learning.
                </li>
                <li>Site: https://sriramabc29.github.io/FinHealth/</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">STOCK MARKET PRICE PREDICTION</h3>
                <span className="text-gray-600">May 2023</span>
              </div>
              <p className="text-sm text-gray-600 italic">PYTHON, LSTM, PLOTLY DASH</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Built a web application for predicting stock market prices using Long Short-Term Memory (LSTM) neural
                  networks.
                </li>
                <li>
                  Utilized the NSE TATA Global dataset for training the LSTM model and additional datasets for
                  multi-stock analysis (e.g., Apple, Microsoft, Facebook).
                </li>
                <li>
                  Pre-processed data by cleaning, normalizing, and splitting into training and testing sets to ensure
                  optimal model performance.
                </li>
                <li>
                  Enhanced user engagement with tools for stock comparisons and dynamic data visualization, leveraging
                  React.js and Dash components.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800 border-b border-gray-300">Certificates</h2>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">Software Engineering Virtual Experience</h3>
                <span className="text-gray-600">Sep 2024</span>
              </div>
              <p className="text-sm text-gray-600 italic">J.P. Morgan Chase & Co., Forage</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Configured a local development environment using Git, Python, and TypeScript, setting up essential
                  tools to streamline workflow.
                </li>
                <li>
                  Resolved repository issues with React and technical communication skills, ensuring accurate web
                  application output and improved user functionality.
                </li>
                <li>
                  Leveraged J.P. Morgan's Perspective library to create a live data visualization graph, enhancing
                  financial data insights and supporting trade monitoring.
                </li>
                <li>
                  Certificate:{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Link
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">Web Development Training</h3>
                <span className="text-gray-600">Dec 2021</span>
              </div>
              <p className="text-sm text-gray-600 italic">Internshala, NSDC Certified</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Acquired comprehensive full-stack web development skills, including HTML, CSS, JavaScript, Bootstrap,
                  DBMS, and PHP.
                </li>
                <li>
                  Learned to create responsive web pages, design user-friendly interfaces, and ensure web accessibility.
                </li>
                <li>Developed proficiency in SQL database management and PHP-based backend development.</li>
                <li>
                  Gained hands-on experience with responsive design techniques, including Flexbox and media queries.
                </li>
                <li>
                  Certificate:{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Link
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">AWS Certified AI Practitioner</h3>
                <span className="text-gray-600">Ongoing 2025</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Gaining expertise in artificial intelligence (AI), machine learning (ML), and generative AI concepts.
                </li>
                <li>Understanding AI-driven solutions and real-world applications across industries.</li>
                <li>
                  Building knowledge of AI ethics and best practices to ensure responsible implementation of AI
                  technologies.
                </li>
                <li>
                  Exploring AWS AI services like SageMaker, Rekognition, and Comprehend to create scalable, intelligent
                  systems.
                </li>
                <li>Enhancing career prospects with in-demand AI/ML skills validated by AWS.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-700">Python Programming Course</h3>
                <span className="text-gray-600">Ongoing 2025</span>
              </div>
              <p className="text-sm text-gray-600 italic">Internshala, NSDC Certified</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>
                  Developed a strong foundation in Python programming, covering syntax, data structures, and
                  object-oriented programming (OOP).
                </li>
                <li>
                  Built Graphical User Interfaces (GUI) using PyQt5, creating interactive applications with event-driven
                  programming.
                </li>
                <li>
                  Worked on a capstone project—a Fantasy Cricket League game, applying Python concepts to game logic,
                  scoring, and database management.
                </li>
                <li>
                  Equipped with skills for roles like Python Developer, Data Analyst, Software Engineer, and Machine
                  Learning Engineer.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800 border-b border-gray-300">Skills</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>Programming & Development: Python, JavaScript, TypeScript, SQL, PHP</li>
              <li>Web & Software Development: React, Node.js, Express.js, Bootstrap, HTML, CSS</li>
              <li>AI & Machine Learning: LSTM, TensorFlow, Keras, Scikit-learn, AWS AI/ML</li>
              <li>Databases & Cloud: PostgreSQL, SQLite, Firebase, Google Cloud, AWS</li>
              <li>Soft Skills: Problem-Solving, Adaptability, Collaboration, Continuous Learning.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CV

