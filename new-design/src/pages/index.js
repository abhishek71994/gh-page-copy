import React, { useRef } from "react"
import SEO from "../components/seo"
import ReactGA from "react-ga";

import Index from '../views/v2/Index';

import "../assets/scss/index.module.scss"

const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
}

const IndexPage = () => {
  initGA(`UA-168898528-1`);
  return (
    <>
      <SEO title='Abhishek Prasad' />
      <Index />
    </>
  )
}

export default IndexPage
