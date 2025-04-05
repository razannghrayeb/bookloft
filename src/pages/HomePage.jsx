"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import FeaturesSection from "../components/FeaturesSection"
import CollectionSection from "../components/CollectionSection"
import ReadingSection from "../components/ReadingSection"
import Newsletter from "../components/Newsletter"

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in-up, .fade-left")

      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top

        if (elementTop < window.innerHeight && elementTop >= 0) {
          element.classList.add("show")
        } else {
          element.classList.remove("show")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <CollectionSection />
      <ReadingSection />
      <Newsletter />
    </div>
  )
}

