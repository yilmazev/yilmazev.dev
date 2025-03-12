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
  const { email, social } = useProfileStore()

  return (
    <footer id="connect" className="flex items-center justify-center lg:py-4 p-2">
      <div className="container flex flex-col p-4 lg:px-20 lg:py-40 border border-neutral-100 rounded-3xl dark:border-neutral-900">
        <div className="flex flex-col items-start">
          <h2 className="flex flex-col gap-8 text-xl lg:text-4xl lg:leading-[1.2] lg:w-4/6 mb-6 lg:mb-12">
            <span>
              {t("footer_ready_title")}
            </span>
            <span className="flex items-center gap-1">
              {t("footer_build_title")}
              <IconSparkles className="fill-yellow-400 stroke-yellow-400 dark:fill-yellow-500 dark:stroke-yellow-500 size-9 hidden lg:block" />
            </span>
          </h2>
          <Link href={`mailto:${email}`} className="flex items-center justify-center gap-2 px-6 py-4 min-w-20 bg-neutral-900 hover:bg-neutral-950 text-white dark:bg-neutral-50 hover:dark:bg-neutral-100 dark:text-neutral-950 rounded-full transition-all">
            <span className="text-base lg:text-xl">{t("footer_btn_email")}</span>
            <IconMoveRight className="size-6 lg:size-7" />
          </Link>
        </div>
        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />
        <div className="flex lg:flex-row flex-col lg:justify-between gap-4">
          <div className="w-full">
            <p className="text-sm lg:text-base text-neutral-500 dark:text-neutral-400 mb-1 lg:mb-3">{t("footer_connect")}</p>
            <Link href={`mailto:${email}`}>
              <span className="text-lg lg:text-xl">{email}</span>
            </Link>
          </div>
          <div className="w-full">
            <p className="text-sm lg:text-base text-neutral-500 dark:text-neutral-400 mb-1 lg:mb-3">{t("footer_social")}</p>
            <div className="flex flex-wrap gap-2">
              {social.map((item, index) => {
                const icon = {
                  github: <IconGithub className="size-5 lg:size-6" />,
                  linkedin: <IconLinkedIn className="size-5 lg:size-6" />
                }[item.platform.toLocaleLowerCase()]

                return (
                  <Link key={index} href={item.link} target="_blank" title={item.platform} className="border size-9 lg:size-10 flex items-center justify-center rounded-xl text-neutral-800 border-neutral-300 hover:bg-neutral-50 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-all">
                    {icon}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer