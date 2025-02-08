"use client"

import { useEffect, useState } from "react"

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[-1]"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 128, 0.3) 0%, rgba(0, 0, 0, 0) 50%)`,
        filter: "blur(40px)",
        opacity: 0.8,
        transition: "background 0.3s ease",
      }}
    />
  )
}

