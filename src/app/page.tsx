import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Works from "../components/Works"

export default function ThemeToggle() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Works />
      <Footer />
    </>
  )
}