import { experience } from "@/data/experience.json"
import clsx from "clsx"
import { useTranslations } from "next-intl"

const Experience = () => {
  const t = useTranslations()

  return (
    <section id="experience" className="flex items-center justify-center py-4">
      <div className="container flex flex-col items-center justify-center pt-16 pb-32">
        <h2 className="text-neutral-950 dark:text-neutral-100 text-5xl leading-[1] font-medium text-center w-3/6 mb-10">
          {t("experience_title")}
        </h2>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          {experience.map((item, index) => {
            const isReverse = index % 2 === 1

            const Line = () => (
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-neutral-300 dark:bg-neutral-800" />
                </div>
                <div className="absolute w-6 h-6 -mt-3 rounded-full top-1/2 bg-neutral-800 border-4 border-white dark:bg-neutral-50 dark:border-black" />
              </div>
            )

            return (
              <div key={index} className={clsx("flex md:contents", isReverse && "flex-row-reverse")}>
                {!isReverse && <Line />}
                <div className={clsx("relative p-4 my-6 text-gray-800 rounded-xl", isReverse ? "col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto" : "col-start-6 col-end-10 mr-auto")}>
                  <p className="whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400 mb-2">{item.date}</p>
                  <h3 className="text-2xl text-neutral-950 dark:text-neutral-100 font-medium">{item.company}</h3>
                </div>
                {isReverse && <Line />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience