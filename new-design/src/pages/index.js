import React from "react"
import SEO from "../components/seo"
import LandingView from "../views/Landing"
import AboutMe from "../views/AboutMe"
import ThingsIDo from "../views/ThingsIDo"
import LatestWork from "../views/LatestWork"
import Experience from "../views/Experience"
import Footer from "../views/Footer"

import "../assets/scss/index.module.scss"

const IndexPage = () => (
  <>
    <SEO title='Abhishek Prasad' />
    <LandingView />
    <AboutMe />
    <ThingsIDo />
    <LatestWork />
    <Experience />
    <Footer />
  </>
)

export default IndexPage
