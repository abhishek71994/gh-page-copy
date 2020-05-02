import React, { useRef } from "react"
import SEO from "../components/seo"
import LandingView from "../views/Landing"
import AboutMe from "../views/AboutMe"
import ThingsIDo from "../views/ThingsIDo"
import LatestWork from "../views/LatestWork"
import Experience from "../views/Experience"
import Footer from "../views/Footer"

import "../assets/scss/index.module.scss"

const IndexPage = () => {
  const scrollToThing = () => {
    document
      .getElementById("thing")
      .scrollIntoView({ block: "end", behavior: "smooth" })
  }
  const scrollToLatest = () => {
    document
      .getElementById("latest")
      .scrollIntoView({ block: "end", behavior: "smooth" })
  }
  const scrollToExp = () => {
    document
      .getElementById("exp")
      .scrollIntoView({ block: "end", behavior: "smooth" })
  }
  return (
    <>
      <SEO title='Abhishek Prasad' />
      <LandingView
        scrollThing={scrollToThing}
        scrollLatest={scrollToLatest}
        scrollExp={scrollToExp}
      />
      <AboutMe />
      <ThingsIDo />
      <LatestWork />
      <Experience />
      <Footer />
    </>
  )
}

export default IndexPage
