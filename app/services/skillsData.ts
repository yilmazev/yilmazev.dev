import { TabProps } from "../types/skillTypes"
import ImageHTML5 from "../assets/images/skills/html5.svg"
import ImageCSS3 from "../assets/images/skills/css3.svg"
import ImageJavascript from "../assets/images/skills/javascript.svg"
import ImageTypescript from "../assets/images/skills/typescript.svg"
import ImageReact from "../assets/images/skills/react.svg"
import ImageNextJS from "../assets/images/skills/nextjs.svg"
import ImageSass from "../assets/images/skills/sass.svg"
import ImageBootstrap from "../assets/images/skills/bootstrap.svg"
import ImageTailwind from "../assets/images/skills/tailwind.svg"
import ImageStyledComponents from "../assets/images/skills/styled-components.svg"
import ImageGIT from "../assets/images/skills/git.svg"
import ImageFigma from "../assets/images/skills/figma.svg"
import ImageJira from "../assets/images/skills/jira.svg"

const skillsData: { tabs: TabProps[] } = {
    tabs: [
        {
            label: "Language",
            skills: [
                {
                    name: "HTML5",
                    color: "bg-orange-500",
                    progress: 100,
                    image: ImageHTML5,
                },
                {
                    name: "CSS3",
                    color: "bg-blue-700",
                    progress: 100,
                    image: ImageCSS3,
                },
                {
                    name: "Javascript",
                    color: "bg-yellow-300",
                    progress: 100,
                    image: ImageJavascript,
                },
                {
                    name: "Typescript",
                    color: "bg-sky-600",
                    progress: 70,
                    image: ImageTypescript,
                },
            ],
        },
        {
            label: "Framework",
            skills: [
                {
                    name: "React",
                    color: "bg-sky-300",
                    progress: 95,
                    image: ImageReact,
                },
                {
                    name: "Next.js",
                    color: "bg-stone-800",
                    progress: 85,
                    image: ImageNextJS,
                },
            ],
        },
        {
            label: "Style",
            skills: [
                {
                    name: "Sass",
                    color: "bg-rose-300",
                    progress: 100,
                    image: ImageSass,
                },
                {
                    name: "Bootstrap 5",
                    color: "bg-violet-500",
                    progress: 100,
                    image: ImageBootstrap,
                },
                {
                    name: "Tailwind",
                    color: "bg-sky-400",
                    progress: 100,
                    image: ImageTailwind,
                },
                {
                    name: "Styled Components",
                    color: "bg-yellow-400",
                    progress: 100,
                    image: ImageStyledComponents,
                },
            ],
        },
        {
            label: "Version Control",
            skills: [
                {
                    name: "Git",
                    color: "bg-orange-600",
                    progress: 100,
                    image: ImageGIT,
                },
            ],
        },
        {
            label: "Tools",
            skills: [
                {
                    name: "Figma",
                    color: "bg-red-400",
                    progress: 70,
                    image: ImageFigma,
                },
                {
                    name: "Jira",
                    color: "bg-blue-400",
                    progress: 80,
                    image: ImageJira,
                },
            ],
        },
    ],
}

export default skillsData