"use client"

import { useTranslations } from "next-intl"
import { useThemeStore } from "../stores/useThemeStore"

export default function ThemeToggle() {
  const t = useTranslations()
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="p-4">
      <p className="dark:text-white">{t("hello")}</p>
      <button
        onClick={toggleTheme}
        className="p-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  )
}