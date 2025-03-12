"use client"

import { skills } from "@/data/skills.json"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const Skills = () => {
  const t = useTranslations()

  return (
    <section id="skills" className="flex items-center justify-center py-4">
      <div className="container flex flex-col items-center justify-center pt-28 pb-56">
        <h2 className="text-5xl leading-[1] font-medium text-center w-3/6 mb-10">
          {t("skills_title")}
        </h2>
        <div className="flex items-center justify-center">
          {skills.map((category, index) => {
            const styles = {
              0: "from-lime-300 to-lime-50 text-lime-800 z-0 dark:from-lime-600 dark:to-lime-300 dark:text-lime-900",
              1: "from-purple-300 to-purple-50 text-purple-800 z-[1] dark:from-purple-600 dark:to-purple-300 dark:text-purple-900",
              2: "from-sky-300 to-sky-50 text-sky-800 z-[2] dark:from-sky-600 dark:to-sky-300 dark:text-sky-900"
            }[index]

            const animations = {
              0: { rotate: -6, x: 64, y: 0 },
              1: { rotate: 6, x: -64, y: 96 },
              2: { rotate: 3, x: -128, y: 0 }
            }[index]

            return (
              <motion.div
                key={index}
                initial={{ rotate: 0, x: -10, y: -10, opacity: 1 }}
                whileInView={{
                  rotate: animations?.rotate,
                  x: animations?.x,
                  y: animations?.y,
                  opacity: 1
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.2
                }}
                className={clsx(
                  "h-fit w-80 border border-black/10 rounded-xl overflow-hidden dark:border-white/20",
                  styles
                )}
              >
                <div className="flex items-center justify-center bg-gradient-to-r w-full py-2">
                  <p>{category.title}</p>
                </div>
                <div className="w-full bg-white dark:bg-neutral-950">
                  <ul className="text-lg text-neutral-950 dark:text-neutral-100">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="py-2 px-4 border-b border-black/10 dark:border-white/20 last:border-0">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills