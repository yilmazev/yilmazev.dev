"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import IconMoonStar from "../assets/icons/moon-star.svg"
import IconSun from "../assets/icons/sun.svg"
import navbarItemsData from "../data/navbar-items.json"
import { useProfileStore } from "../stores/useProfileStore"
import { useThemeStore } from "../stores/useThemeStore"

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore()
  const { fullName, avatar } = useProfileStore()

  const [ activeSection, setActiveSection ] = useState<string | null>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    navbarItemsData.navbar_items.forEach((item) => {
      const section = document.getElementById(item.href.replace("#", ""))
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed top-0 flex justify-center w-full z-50">
      <div className="container">
        <nav className="flex items-center justify-between my-6 mx-2 px-4 py-3 bg-white border border-neutral-100 rounded-full dark:bg-black dark:border-neutral-900">
          <div className="flex items-center gap-2">
            <Image
              src={avatar}
              alt={fullName}
              width={36}
              height={36}
              quality={100}
              className="shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-900"
            />
            <span className="font-semibold">{fullName}</span>
          </div>
          <ul className="flex items-center gap-1">
            {navbarItemsData.navbar_items.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <li key={index}>
                  <ScrollLink
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={300}
                    offset={-120}
                  >
                    <div className="relative px-3.5 py-1.5 rounded-full cursor-pointer">
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="absolute inset-0 border border-neutral-100 dark:border-neutral-900 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className={clsx(
                        "relative z-10 text-[0.938rem] transition-colors",
                        isActive
                          ? "text-neutral-950 dark:text-neutral-100"
                          : "text-neutral-500 dark:text-neutral-400"
                      )}>
                        {item.label}
                      </span>
                    </div>
                  </ScrollLink>
                </li>
              )
            })}
            <li className="mx-1" />
            <li>
              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 flex items-center bg-white border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-900 rounded-full transition-all"
              >
                <div
                  className={clsx(
                    "absolute left-px flex items-center justify-center size-5 bg-neutral-50 dark:bg-neutral-950 rounded-full transition-all",
                    { "translate-x-6": theme === "dark" }
                  )}
                >
                  {theme === "dark"
                    ? <IconMoonStar className="size-3 text-neutral-100" />
                    : <IconSun className="size-3 text-neutral-950" />
                  }
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar