import React from "react"
import classnames from "classnames"

import HeaderText from "../components/headerText"

import styles from "../assets/scss/Experience.module.scss"
const LatestWork = () => {
  return (
    <div className={styles.experienceContainer} id={"exp"}>
      <HeaderText>{`Experience`}</HeaderText>
      <div className={styles.experienceContent}>
        <div className={classnames(styles.experienceCard, styles.active)}>
          <p className={styles.date}>{`2019-Present`}</p>
          <h1 className={styles.designation}>{`Software Engineer`}</h1>
          <h1 className={styles.company}>{`Fave`}</h1>
        </div>
        <div className={styles.experienceCard}>
          <p className={styles.date}>{`2018-Present`}</p>
          <h1 className={styles.designation}>{`Admin`}</h1>
          <h1 className={styles.company}>{`MentorFix`}</h1>
        </div>
        <div className={styles.experienceCard}>
          <p className={styles.date}>{`2020-Present`}</p>
          <h1 className={styles.designation}>{`Project Engineer`}</h1>
          <h1 className={styles.company}>{`Educatly`}</h1>
        </div>
      </div>
    </div>
  )
}

export default LatestWork
