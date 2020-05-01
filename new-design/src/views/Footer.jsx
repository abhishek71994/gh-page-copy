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
        <GhostButton>{`Email me`}</GhostButton>
        <div className={styles.icons}>
          <a>
            <img src={github} />
          </a>
          <a>
            <img src={linkedIn} />
          </a>
          <a>
            <img src={twitter} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
