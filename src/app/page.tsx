"use client"

import { useThemeStore } from "../stores/useThemeStore"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="p-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  )
}