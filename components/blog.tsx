"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Blog() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      className="pt-0 pb-20"
      id="blog"
      style={{ fontFamily: '-apple-system, "SF Pro Display", BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-12">
        <div
          ref={ref}
          className={`text-center mb-12
          transform transition-all duration-1000 ease-out
          ${inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <h2 className="text-[3.5rem] font-[500] tracking-normal mb-3">
            <span className="metallic-gradient">Blog</span> <span className="text-[#4169E1]">Posts</span>
          </h2>
          <p className="text-[#888888] text-lg font-[500] tracking-wide">Enjoy a deep-dive inside my mind...</p>
        </div>

        <div className="space-y-6">
          {/* Featured Post */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  className="grid md:grid-cols-2 gap-8 bg-[rgba(20,20,23,0.75)] backdrop-blur-lg rounded-[20px] overflow-hidden border border-white/5 p-8"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#4169E1]">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-[500] text-white mb-4">{post.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="text-sm font-[500]">
                        <span className="text-gray-400">by </span>
                        <span className="text-white">{post.author.name}</span>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 font-[500]">{post.excerpt}</p>
                    <motion.button
                      className="self-start px-6 py-2 rounded-full bg-[rgba(255,255,255,0.1)] text-white text-sm font-[500] hover:bg-[rgba(255,255,255,0.15)] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Continue Reading →
                    </motion.button>
                  </div>
                </motion.article>
              </Link>
            ))}
          {/* Two Column Posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1, 3).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  className="bg-[rgba(20,20,23,0.75)] backdrop-blur-lg rounded-[20px] overflow-hidden border border-white/5"
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative aspect-[2/1] ${post.bgColor}`}>
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-[500] text-white mb-4">{post.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="text-sm font-[500]">
                        <span className="text-gray-400">by </span>
                        <span className="text-white">{post.author.name}</span>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 font-[500]">{post.excerpt}</p>
                    <motion.button
                      className="px-6 py-2 rounded-full bg-[rgba(255,255,255,0.1)] text-white text-sm font-[500] hover:bg-[rgba(255,255,255,0.15)] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Continue Reading →
                    </motion.button>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
          {/* Full Width Video Post */}
          {blogPosts
            .filter((post) => post.video)
            .map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  className="bg-[rgba(20,20,23,0.75)] backdrop-blur-lg rounded-[20px] overflow-hidden border border-white/5"
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative aspect-video ${post.bgColor}`}>
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-[500] text-white mb-4">{post.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="text-sm font-[500]">
                        <span className="text-gray-400">by </span>
                        <span className="text-white">{post.author.name}</span>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 font-[500]">{post.excerpt}</p>
                    <motion.button
                      className="px-6 py-2 rounded-full bg-[rgba(255,255,255,0.1)] text-white text-sm font-[500] hover:bg-[rgba(255,255,255,0.15)] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Continue Reading →
                    </motion.button>
                  </div>
                </motion.article>
              </Link>
            ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-block text-[#4169E1] hover:text-[#4169E1]/90 text-lg font-[500] transition-colors"
          >
            View All Posts {">"}
            {">"}
          </Link>
        </div>
      </div>
    </section>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "How to build high responsive React apps in 2024",
    excerpt:
      "One way to create responsive web applications with React is to leverage responsive design frameworks like Bootstrap, Material-UI, or Ant Design. These frameworks provide pre-built components and CSS classes that make it easier to create responsive layouts.",
    image: "/placeholder.svg",
    date: "December 16, 2024",
    author: {
      name: "Adedayo Moshood",
      avatar: "/placeholder.svg",
    },
    slug: "build-responsive-react-apps-2024",
    featured: true,
  },
  {
    id: 2,
    title: "What do the State of CSS and HTML surveys tell us?",
    excerpt:
      "Before looking at some of the issues people are having with HTML and CSS, the surveys do convey a lot of optimism about the platform. When asked if the web platform is moving in the right direction overall, 58% of people taking State of HTML agreed with that statement, with 18%...",
    image: "/placeholder.svg",
    date: "December 16, 2024",
    author: {
      name: "Adedayo Moshood",
      avatar: "/placeholder.svg",
    },
    slug: "state-of-css-html-surveys",
    bgColor: "bg-[#40E0D0]",
  },
  {
    id: 3,
    title: "The CSS content-visibility property is now available",
    excerpt:
      "One way to create responsive web applications with React is to leverage responsive design frameworks like Bootstrap, Material-UI, or Ant Design. These frameworks provide pre-built components and CSS classes that make it easier to create responsive layouts.",
    image: "/placeholder.svg",
    date: "December 16, 2024",
    author: {
      name: "Adedayo Moshood",
      avatar: "/placeholder.svg",
    },
    slug: "css-content-visibility",
    bgColor: "bg-[#FFD700]",
  },
  {
    id: 4,
    title: "Passkeys hackathon in Tokyo: Passkeys on IoT devices and more",
    excerpt:
      "In June 2024, Google teamed up with the FIDO Alliance to host a passkey hackathon in Tokyo. The aim was to give participants hands-on experience with passkey development and prototyping passkeys for real-world products, with guidance from FIDO Alliance staff.",
    image: "/placeholder.svg",
    date: "December 16, 2024",
    author: {
      name: "Adedayo Moshood",
      avatar: "/placeholder.svg",
    },
    slug: "passkeys-hackathon-tokyo",
    bgColor: "bg-gradient-to-r from-red-500 to-red-600",
    video: true,
  },
]

