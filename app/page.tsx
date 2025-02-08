import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import MobileNote from "@/components/MobileNote"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <MobileNote />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

