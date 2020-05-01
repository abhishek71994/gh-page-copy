import React from "react"

import GhostButton from "../components/ghostButton"
import github from "../images/github.svg"
import linkedIn from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

import styles from "../assets/scss/Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <a href="mailto:abhishek71994@gmail.com">
          <GhostButton>{`Email me`}</GhostButton>
        </a>
        <div className={styles.icons}>
          <a href="https://github.com/abhishek71994">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/abhi-hk95/">
            <img src={linkedIn} />
          </a>
          <a href="https://twitter.com/abhi_hk95">
            <img src={twitter} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
