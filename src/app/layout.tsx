import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "../styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ]
})

export const metadata: Metadata = {
  title: "Open-Source Portfolio",
  description: "Generated by create next app"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}