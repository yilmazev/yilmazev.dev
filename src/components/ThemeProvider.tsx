"use client"

import { useEffect, useState } from "react"
import { ThemeType, useThemeStore } from "../stores/useThemeStore"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useThemeStore()
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType || "light"
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      setTheme(systemTheme)
    }
    setIsMounted(true)
  }, [ setTheme ])

  if (!isMounted) return null

  return (
    <>
      {children}
    </>
  )
}