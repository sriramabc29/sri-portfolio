"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/utils/smoothScroll"
import { useState } from "react"
import CV from "@/components/cv"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const router = useRouter()
  const [showCV, setShowCV] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24,
      },
    },
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (window.location.pathname !== "/") {
      router.push("/")
      setTimeout(() => smoothScroll("contact"), 100)
    } else {
      smoothScroll("contact")
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-[1400px] mx-auto">
          <nav className="bg-gray-800/30 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between border border-white/5">
            <Link href="/" className="text-2xl font-bold text-yellow-500" onClick={() => window.scrollTo(0, 0)}>
              S
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/experience" className="text-[15px] text-gray-200 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/projects" className="text-[15px] text-gray-200 hover:text-white transition-colors">
                Projects
              </Link>
              <a
                href="/#contact"
                className="text-[15px] text-gray-200 hover:text-white transition-colors"
                onClick={handleContactClick}
              >
                Contact
              </a>
              <Link href="/about" className="text-[15px] text-gray-200 hover:text-white transition-colors">
                About
              </Link>
              <Button
                variant="default"
                className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white rounded-full px-6 py-2 text-[15px]"
                onClick={() => setShowCV(true)}
              >
                View CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-gradient-to-br from-black via-[#0A0A2E] to-[#0A0A2E] z-50 flex items-start pt-24 justify-end"
            >
              <Link
                href="/"
                className="absolute top-7 left-7 text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                onClick={() => {
                  window.scrollTo(0, 0)
                  setMobileMenuOpen(false)
                }}
              >
                S
              </Link>
              <button
                className="absolute top-7 right-7 text-white/70 hover:text-white p-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>

              <div className="flex items-start w-full px-8 md:px-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  className="text-white/30 text-xl tracking-wider vertical-text mt-8"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  NAVIGATION
                </motion.span>

                <motion.div
                  className="flex flex-col items-end space-y-8 w-full pl-12"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[
                    { href: "/experience", label: "Experience" },
                    { href: "/projects", label: "Projects" },
                    { href: "/#contact", label: "Contact", onClick: handleContactClick },
                    { href: "/about", label: "About" },
                  ].map((item, i) => (
                    <motion.div key={item.label} variants={menuItemVariants}>
                      <Link
                        href={item.href}
                        className="text-4xl font-light text-white/80 hover:text-white transition-all hover:translate-x-[-8px]"
                        onClick={(e) => {
                          if (item.onClick) item.onClick(e)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div variants={menuItemVariants}>
                    <Button
                      variant="outline"
                      className="text-white border-white/10 hover:border-[#4169E1] hover:text-[#4169E1] hover:shadow-[0_0_10px_#4169E1] text-xl px-8 py-6 mt-8 rounded-xl transition-all duration-300 hover:translate-x-[-8px]"
                      onClick={() => {
                        setShowCV(true)
                        setMobileMenuOpen(false)
                      }}
                    >
                      View CV
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </header>
      {showCV && <CV onClose={() => setShowCV(false)} />}
    </>
  )
}

