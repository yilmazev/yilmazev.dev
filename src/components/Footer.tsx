"use client"

import IconSparkles from "@/assets/icons/sparkles.svg"
import { useTranslations } from "next-intl"
import Link from "next/link"
import IconGithub from "../assets/icons/github.svg"
import IconLinkedIn from "../assets/icons/linkedin.svg"
import IconMoveRight from "../assets/icons/move-right.svg"
import { useProfileStore } from "../stores/useProfileStore"

const Footer = () => {
  const t = useTranslations()
  const { email } = useProfileStore()

  return (
    <footer id="connect" className="flex items-center justify-center py-4">
      <div className="container flex flex-col px-20 py-40 border border-neutral-100 rounded-3xl dark:border-neutral-900">
        <div className="flex flex-col items-start">
          <h2 className="flex flex-col gap-8 text-4xl leading-[1.2] w-4/6 mb-12">
            <span>Ready to bring your ideas to life with innovative development solutions?</span>
            <span className="flex items-center gap-4">
              Let's build something amazing together
              <IconSparkles className="fill-yellow-400 stroke-yellow-400 dark:fill-yellow-500 dark:stroke-yellow-500 size-9" />
            </span>
          </h2>
          <Link href={`mailto:${email}`} className="flex items-center justify-center gap-2 px-6 py-4 min-w-20 bg-neutral-900 hover:bg-neutral-950 text-white dark:bg-neutral-50 hover:dark:bg-neutral-100 dark:text-neutral-950 rounded-full transition-all">
            <span className="text-xl">{t("hero_btn_email")}</span>
            <IconMoveRight className="size-7" />
          </Link>
        </div>
        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />
        <div className="flex justify-between">
          <div className="w-full">
            <p className="text-neutral-500 dark:text-neutral-400 mb-3">Connect</p>
            <Link href={`mailto:${email}`}>
              <span className="text-xl">{email}</span>
            </Link>
          </div>
          <div className="w-full">
            <p className="text-neutral-500 dark:text-neutral-400 mb-3">Follow</p>
            <div className="flex gap-2">
              <Link href="#" className="border size-11 flex items-center justify-center rounded-xl text-neutral-800 border-neutral-300 hover:bg-neutral-50 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-all">
                <IconGithub className="size-6" />
              </Link>
              <Link href="#" className="border size-11 flex items-center justify-center rounded-xl text-neutral-800 border-neutral-300 hover:bg-neutral-50 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-all">
                <IconLinkedIn className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer