import type { Metadata, Viewport } from "next"
import type { PropsWithChildren } from "react"
import { Inter } from "next/font/google"
import { Provider } from "@/app/provider"
import "@/app/layout.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s - Dashboard"
  },
  description: "An admin dashboard application.",
  creator: "Plantify",
  icons: {
    icon: "/logotypes/favicon.ico",
    shortcut: "/logotypes/favicon-16x16.png",
    apple: "/logotypes/apple-touch-icon.png"
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className="light" lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
