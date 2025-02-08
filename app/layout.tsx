import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Background } from "@/components/background"
import type React from "react"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full-Stack Developer Portfolio",
}

const iconPaths = [
  "/icons/html5.svg",
  "/icons/css3.svg",
  "/icons/javascript.svg",
  "/icons/typescript.svg",
  "/icons/react.svg",
  "/icons/angular.svg",
  "/icons/chartjs.svg",
  "/icons/bootstrap.svg",
  "/icons/nodejs.svg",
  "/icons/python.svg",
  "/icons/php.svg",
  "/icons/csharp.svg",
  "/icons/dotnet.svg",
  "/icons/java.svg",
  "/icons/react-native.svg",
  "/icons/android.svg",
  "/icons/mongodb.svg",
  "/icons/mysql.svg",
  "/icons/firebase.svg",
  "/icons/unity.svg",
  "/icons/tensorflow.svg",
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {iconPaths.map((path) => (
          <link key={path} rel="preload" href={path} as="image" type="image/svg+xml" />
        ))}
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <Background />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

