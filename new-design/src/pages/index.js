import React from "react"
import "../assets/scss/index.module.scss"
import LandingView from "../views/Landing"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <LandingView />
  </>
)

export default IndexPage
