import React from "react"

import HeaderText from "../components/headerText"

import styles from "../assets/scss/LatestWork.module.scss"

const LatestWork = () => {
  return (
    <div className={styles.latestContainer}>
      <HeaderText>{`Latest work`}</HeaderText>
      <p>{`The projects that my skillset allows me to execute into the real world`}</p>
      <div className={styles.workContainer}>
        <a
          className={styles.saveOurFave}
          href="https://saveourfave.com"
          target="blank"
        >
          Save our fave
        </a>
        <a
          className={styles.faveBiz}
          href="https://www.favebiz.com"
          target="blank"
        >
          favebiz
        </a>
        <a
          className={styles.mentorfix}
          href="https://mentorfix.org"
          target="blank"
        >
          mentorfix
        </a>
      </div>
    </div>
  )
}

export default LatestWork
