"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/sriramabc29" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/sriramabc30" },
  { name: "Email", icon: Mail, href: "mailto:sriramabc30@gmail.com" },
]

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <div className="space-y-4">
            <motion.h2
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-[#00bfff]"
              whileHover={{ scale: 1.05 }}
            >
              Sri Ram
            </motion.h2>
            <p className="text-gray-400 text-sm">
              Next-Gen Full-Stack Developer passionate about creating innovative solutions and pushing the boundaries of
              technology.
            </p>
          </div>

          {/* Quick links */}
          <nav className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <motion.a
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Sri Ram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

