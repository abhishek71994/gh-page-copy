import React from "react"
import styles from "../assets/scss/Landing.module.scss"
import heroImage from "../images/hero-image.jpg"

const Landing = props => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.overlay} />
      <div className={styles.landingElement}>
        <div className={styles.navSelector}>
          <h5 onClick={() => props.scrollThing()}>{`Things I do`}</h5>
          <h5 onClick={() => props.scrollLatest()}>{`Latest work`}</h5>
          <h5 onClick={() => props.scrollExp()}>{`Experience`}</h5>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p>Hello</p>
            <h1>I am Abhishek</h1>
            <h1 className={styles.designation}>Software Engineer</h1>
            <p>Building scalable systems is my current obsession</p>
          </div>
          <img
            src={heroImage}
            className={styles.heroImage}
            alt="hero-abhishek"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
