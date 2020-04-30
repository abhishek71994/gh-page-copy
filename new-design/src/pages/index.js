import React from "react"
import SEO from "../components/seo"
import LandingView from "../views/Landing"
import AboutMe from "../views/AboutMe"
import ThingsIDo from "../views/ThingsIDo"

import "../assets/scss/index.module.scss"

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <LandingView />
    <AboutMe />
    <ThingsIDo />
  </>
)

export default IndexPage
