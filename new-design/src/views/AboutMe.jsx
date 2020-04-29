import React from "react"

import HeaderText from "../components/headerText"
import AboutMeImage from "../images/About-me-image.png"

import styles from "../assets/scss/aboutMe.module.scss"

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutMeLeftSection}>
        <HeaderText>{`About me`}</HeaderText>
        <div className={styles.aboutMeContent}>
          <p>{`Melophile. `}</p>
          <p>{`I love tackling problems and getting lost in fixing them, but coming up with a solution before the dealine ;) Everything should make sense, from the colors that you see to the engine that runs in the server to the database management and beyond. Hence, I actively focus more on system design and using the right standards of coding.`}</p>
        </div>
      </div>
      <div className={styles.aboutMeRightSection}>
        <img src={AboutMeImage} alt="about-me" />
      </div>
    </div>
  )
}

export default AboutMe
