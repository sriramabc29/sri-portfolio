"use client"

import { useEffect, useState } from "react"

export default function MobileNote() {
  const [showMobileNote, setShowMobileNote] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMobileNote(false)
    }, 5000) // Note disappears after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!showMobileNote) return null

  return (
    <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-800/80 text-white p-2 text-xs z-50 flex items-center justify-center transition-opacity duration-1000 ease-in-out">
      For optimal experience, view on desktop
    </div>
  )
}

