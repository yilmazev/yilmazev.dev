import { create } from "zustand"

export type ThemeType = "light" | "dark"

interface IThemeStore {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<IThemeStore>((set) => {
  const getStoredTheme = () => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as ThemeType) || "light"
    }
    return "light"
  }

  return {
    theme: getStoredTheme(),

    setTheme: (theme) => {
      localStorage.setItem("theme", theme)
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)
      set({ theme })
    },

    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === "dark" ? "light" : "dark"
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(newTheme)
        return { theme: newTheme }
      })
    }
  }
})