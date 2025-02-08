"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const techStack = {
  "Front-End": [
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "Chart.js", icon: "/icons/chartjs.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  ],
  "Back-End": [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "C#", icon: "/icons/csharp.svg" },
    { name: ".NET", icon: "/icons/dotnet.svg" },
    { name: "Java", icon: "/icons/java.svg" },
  ],
  "Mobile Development": [
    { name: "React Native", icon: "/icons/react-native.svg" },
    { name: "Android", icon: "/icons/android.svg" },
  ],
  Databases: [
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
  ],
  "Other Technologies": [
    { name: "Unity", icon: "/icons/unity.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  ],
}

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 px-4">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto bg-[rgba(32,32,35,0.3)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-[20px]
          transform transition-all duration-1000 ease-out
          ${inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <div className="p-8">
          <h2 className="text-[2rem] font-normal mb-12">
            <span className="metallic-gradient">Technical</span>{" "}
            <span className="bg-gradient-to-r from-[#4169E1] to-[#00bfff] text-transparent bg-clip-text">Skills</span>
          </h2>

          <div className="space-y-12">
            {Object.entries(techStack).map(([category, skills], categoryIndex) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView && mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center gap-3 transition-colors hover:border-blue-500/50">
                        <div className="relative w-12 h-12 p-2">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300"
                            priority
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder.svg"
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-300 text-center font-medium group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

