import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import { Rubik } from "next/font/google"
import ThemeProvider from "../components/ThemeProvider"
import "../styles/globals.css"

const rubik = Rubik({ subsets: [ "latin" ], weight: [ "300", "400", "500", "600", "700", "800", "900" ] })

export const metadata: Metadata = {
  title: "Yilmaz Ev - Frontend Developer",
  description: "I am a frontend developer who creates user-friendly and smooth interfaces."
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased bg-white dark:bg-black min-h-screen overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  )
}