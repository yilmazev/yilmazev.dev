"use client"

import { works } from "@/data/works.json"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import IconMoveRight from "../assets/icons/move-right.svg"

const Works = () => {
  const t = useTranslations()

  return (
    <section id="works" className="flex items-center justify-center py-4">
      <div className="container flex flex-col items-center justify-center pt-16 pb-32">
        <h2 className="text-5xl leading-[1] font-medium text-center w-3/6 mb-10">
          {t("works_title")}
        </h2>
        <div className="flex flex-col gap-12 w-full">
          {works.map((work, index) => (
            <div key={index} className="flex gap-4 w-full h-[40rem]">
              <div className="flex flex-col justify-between rounded-3xl border border-black/5 dark:border-white/15 w-2/6 p-6">
                <div>
                  <h3 className="text-3xl mb-2">{work.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{work.description}</p>
                </div>
                <div>
                  <Link
                    href={work.link}
                    target="_blank"
                    title={work.title}
                    className="flex items-center justify-between gap-2 px-5 py-3 hover:bg-neutral-50 hover:dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-full transition-all"
                  >
                    <span>{t("works_btn_case")}</span>
                    <IconMoveRight className="size-7" />
                  </Link>
                </div>
              </div>
              <div className="p-6 w-full bg-neutral-50 dark:bg-neutral-950 border rounded-3xl border-black/5 dark:border-white/15">
                <div className="relative size-full p-6 overflow-hidden rounded-3xl">
                  <Image src={work.image} alt={work.title} className="object-cover" fill />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works