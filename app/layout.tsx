import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import localFont from "next/font/local"
import "./styles/globals.css"

const sfPro = localFont({
    src: [
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-RegularItalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-SemiboldItalic.otf",
            weight: "700",
            style: "italic",
        }
    ],
    variable: "--font-sf-pro",
    display: "swap"
})

export const metadata: Metadata = {
    title: "Yılmaz Ev | Frontend Developer",
    description: "I'm Yılmaz Ev, a front-end developer passionate about creating beautiful user interfaces and impressive experiences.",
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={sfPro.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
