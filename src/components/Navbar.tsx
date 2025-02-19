"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { navbar_items } from "../data/navbar-items.json"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

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

    navbar_items.forEach((item) => {
      const section = document.getElementById(item.href.replace("#", ""))
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed top-0 flex justify-center w-full z-50">
      <div className="container">
        <nav className="flex items-center justify-between my-6 mx-2 px-4 py-3 bg-white border border-black/5 rounded-full dark:bg-neutral-950 dark:border-white/15">
          <div className="flex items-center gap-2">
            <Image
              src="/images/avatar.jpeg"
              alt="Yılmaz Ev"
              width={36}
              height={36}
              quality={100}
              className="shrink-0 rounded-full bg-black/10 dark:bg-white/10"
            />
            <span className="text-neutral-950 dark:text-neutral-50 font-semibold">Yılmaz Ev</span>
          </div>
          <ul className="flex items-center gap-1">
            {navbar_items.map((item, index) => {
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
                          className="absolute inset-0 border border-black/5 dark:border-white/15 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className={clsx(
                        "relative z-10 text-[0.938rem] transition-colors",
                        isActive
                          ? "text-neutral-950 dark:text-neutral-50 font-medium"
                          : "text-neutral-500 dark:text-neutral-400"
                      )}>
                        {item.label}
                      </span>
                    </div>
                  </ScrollLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar