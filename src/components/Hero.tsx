"use client"

import clsx from "clsx"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import IconGlobe from "../assets/icons/globe.svg"
import IconMonitorSmartPhone from "../assets/icons/monitor-smartphone.svg"
import IconMoveRight from "../assets/icons/move-right.svg"
import IconType from "../assets/icons/type.svg"
import IconVariable from "../assets/icons/variable.svg"
import { useProfileStore } from "../stores/useProfileStore"

const Hero = () => {
  const t = useTranslations()
  const { email } = useProfileStore()
  const { scrollYProgress } = useScroll()

  const [ isFirstLoad, setIsFirstLoad ] = useState(true)

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-50% 0px" })

  const terms = [
    {
      icon: <IconType className="size-7" />,
      label: t("hero_term_1"),
      className: "rotate-2 right-12 top-0 from-lime-200 to-lime-300 text-lime-700 dark:from-lime-300 dark:to-lime-500 dark:text-lime-900",
      moveX: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, 1000 ]),
      moveY: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, -1000 ])
    },
    {
      icon: <IconMonitorSmartPhone className="size-7" />,
      label: t("hero_term_2"),
      className: "rotate-3 right-28 top-16 from-sky-200 to-sky-300 text-sky-700 dark:from-sky-300 dark:to-sky-500 dark:text-sky-900",
      moveX: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, -1200 ]),
      moveY: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, 800 ])
    },
    {
      icon: <IconGlobe className="size-7" />,
      label: t("hero_term_3"),
      className: "-rotate-6 right-0 top-14 from-yellow-200 to-yellow-300 text-yellow-700 dark:from-yellow-300 dark:to-yellow-500 dark:text-yellow-900",
      moveX: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, 900 ]),
      moveY: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, 1100 ])
    },
    {
      icon: <IconVariable className="size-7" />,
      label: t("hero_term_4"),
      className: "rotate-6 right-28 top-8 from-purple-200 to-purple-300 text-purple-700 dark:from-purple-300 dark:to-purple-500 dark:text-purple-900",
      moveX: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, -900 ]),
      moveY: useTransform(scrollYProgress, [ 0, 0.2 ], [ 0, -1100 ])
    }
  ]

  useEffect(() => {
    if (!isFirstLoad) return
    if (isInView) setIsFirstLoad(false)
  }, [ isInView ])

  return (
    <section id="hero" className="relative flex items-center justify-center py-4 overflow-hidden">
      <div className="container flex items-center h-[calc(100vh-2rem)] bg-neutral-50 dark:bg-neutral-950 border border-black/5 rounded-3xl dark:border-white/15">
        <div className="relative flex flex-col px-20 w-full xl:w-3/4">
          <p className="text-neutral-600 dark:text-neutral-300 text-3xl mb-4">{t("hero_hello")}</p>
          <h1 className="text-5xl leading-[1.2] font-medium">{t("hero_description")}</h1>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 mt-8">
              <Link href={`mailto:${email}`} className="flex items-center justify-center gap-2 px-6 py-4 min-w-20 hover:bg-neutral-100 hover:dark:bg-neutral-900 border border-neutral-950 dark:border-neutral-100 rounded-full transition-all">
                <span className="text-xl">{t("hero_btn_email")}</span>
                <IconMoveRight className="size-7" />
              </Link>
            </div>
            <div ref={containerRef} className="relative top-20 -right-20 flex items-center justify-center">
              {terms.map((item, index) => (
                <motion.div
                  key={index}
                  style={{ x: item.moveX, y: item.moveY }}
                  className={clsx("absolute flex items-center gap-2 bg-gradient-to-b font-medium py-4 px-7 rounded-2xl select-none transition-all", item.className)}
                >
                  {item.icon}
                  <span className="text-2xl">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero