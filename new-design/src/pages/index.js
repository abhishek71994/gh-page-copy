import React from "react"
import SEO from "../components/seo"
import LandingView from "../views/Landing"
import AboutMe from '../views/AboutMe'

import "../assets/scss/index.module.scss"


const IndexPage = () => (
  <>
    <SEO title='Home' />
    <LandingView />
    <AboutMe/>
  </>
)

export default IndexPage
