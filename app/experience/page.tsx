"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { Inter } from "next/font/google"
import { Network, Code2, CircuitBoard, Cpu } from "lucide-react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Skills } from "@/components/skills"

const inter = Inter({ subsets: ["latin"] })

const experiences = [
  {
    id: 1,
    company: "MITHRA INFOTECH",
    role: "IT Administrator",
    period: "JUN 2023 – OCT 2023",
    logo: "M",
    logoColors: "from-blue-500 to-purple-500",
    achievements: [
      {
        text: "Led technical support initiatives resulting in a ",
        highlight: "25% boost",
        rest: " in project completion rates, while reducing system downtime by ",
        highlight2: "30%",
        rest2: " through comprehensive staff training programs.",
      },
      {
        text: "Orchestrated and maintained a complex IT infrastructure encompassing ",
        highlight: "30+ network systems",
        rest: " and ",
        highlight2: "8 servers",
        rest2: ", achieving a consistent ",
        highlight3: "60% uptime",
        rest3: " through strategic maintenance protocols.",
      },
      {
        text: "Implemented robust security measures protecting ",
        highlight: "200+ users",
        rest: ", incorporating advanced encryption standards and establishing comprehensive data protection frameworks.",
      },
      {
        text: "Pioneered automation solutions reducing manual intervention by ",
        highlight: "40%",
        rest: ", significantly enhancing system monitoring efficiency and overall network stability.",
      },
      {
        text: "Developed and executed comprehensive disaster recovery plans, ensuring business continuity and minimal data loss scenarios.",
      },
      {
        text: "Collaborated with cross-functional teams to optimize IT processes and implement best practices across departments.",
      },
    ],
  },
  {
    id: 2,
    company: "8 QUEENS TECHNOLOGIES",
    role: "Full Stack Intern",
    period: "NOV 2022 — APR 2023",
    logo: "8Q",
    logoColors: "from-[#4169E1] to-[#00bfff]",
    achievements: [
      {
        text: "Engineered high-performance backend solutions utilizing ",
        highlight: "PHP, DBMS, and JavaScript",
        rest: ", achieving a ",
        highlight2: "40% improvement",
        rest2: " in application load times.",
      },
      {
        text: "Seamlessly integrated frontend components with ",
        highlight: "HTML, CSS, Bootstrap, and React",
        rest: ", driving a ",
        highlight2: "30% increase",
        rest2: " in development workflow efficiency.",
      },
      {
        text: "Architected and implemented secure database management systems, reducing downtime by ",
        highlight: "20%",
        rest: " while ensuring robust data integrity.",
      },
      {
        text: "Designed and developed RESTful APIs facilitating efficient microservices communication and cross-platform data exchange.",
      },
      {
        text: "Participated in agile development cycles, contributing to sprint planning and daily standups.",
      },
      {
        text: "Mentored junior developers in modern development practices and coding standards.",
      },
    ],
  },
]

const CompanyLogo = ({ company }: { company: string }) => {
  if (company === "MITHRA INFOTECH") {
    return (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl" />
        <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center">
          <div className="grid grid-cols-2 gap-0.5">
            <Network className="w-4 h-4 text-white/90" />
            <CircuitBoard className="w-4 h-4 text-white/90" />
            <Cpu className="w-4 h-4 text-white/90" />
            <div className="w-4 h-4 flex items-center justify-center text-white/90 text-xs font-bold">M</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#00bfff] rounded-xl" />
      <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5">
          <Code2 className="w-4 h-4 text-white/90" />
          <div className="w-4 h-4 flex items-center justify-center text-white/90 text-xs font-bold">8</div>
          <div className="w-4 h-4 flex items-center justify-center text-white/90 text-xs font-bold">Q</div>
          <CircuitBoard className="w-4 h-4 text-white/90" />
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0].id)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <Skills />
        <section className={`py-20 px-4 ${inter.className}`} id="experience">
          <div
            ref={ref}
            className={`max-w-[1400px] mx-auto bg-[rgba(32,32,35,0.3)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-[20px]
              transform transition-all duration-1000 ease-out
              ${inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="p-8">
              <h2 className="text-[2rem] font-normal mb-12">
                <span className="metallic-gradient">Career</span>{" "}
                <span className="bg-gradient-to-r from-[#4169E1] to-[#00bfff] text-transparent bg-clip-text">
                  Experience
                </span>
              </h2>

              <div className="grid lg:grid-cols-[300px,1fr] gap-8">
                {/* Left Column - Company List */}
                <div className="space-y-8">
                  {experiences.map((exp) => (
                    <motion.div
                      key={exp.id}
                      className={`cursor-pointer transition-all duration-300 p-4 rounded-xl
                        ${selectedCompany === exp.id ? "bg-white/5" : "hover:bg-white/5"}`}
                      onClick={() => setSelectedCompany(exp.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div className="mb-4" whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
                        <CompanyLogo company={exp.company} />
                      </motion.div>
                      <h3 className="text-white text-lg font-medium">{exp.company}</h3>
                      <p className="text-gray-400 text-sm">{exp.role}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column - Description */}
                <div className="relative min-h-[800px] lg:min-h-[600px]">
                  <AnimatePresence mode="wait">
                    {experiences.map(
                      (exp) =>
                        exp.id === selectedCompany && (
                          <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start text-[15px] leading-relaxed text-gray-400"
                              >
                                <span className="mr-2 mt-1.5">•</span>
                                <span>
                                  {achievement.text}
                                  {achievement.highlight && <span className="text-white">{achievement.highlight}</span>}
                                  {achievement.rest}
                                  {achievement.highlight2 && (
                                    <span className="text-white">{achievement.highlight2}</span>
                                  )}
                                  {achievement.rest2}
                                  {achievement.highlight3 && (
                                    <span className="text-white">{achievement.highlight3}</span>
                                  )}
                                  {achievement.rest3}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>
                        ),
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

