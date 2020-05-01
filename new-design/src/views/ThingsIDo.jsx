import React from "react"

import HeaderText from "../components/headerText"
import GradientCard from "../components/GradientCard"
import ReactIcon from "../images/reactIcon.png"
import NodeIcon from "../images/node.png"

import styles from "../assets/scss/ThingsIDo.module.scss"

const ThingsIDo = () => {
  return (
    <div className={styles.thingsContainer}>
      <HeaderText>{`Things I do`}</HeaderText>
      <div className={styles.cardContainer}>
        <GradientCard
          color1={"#2ECC71"}
          color2={"rgba(0, 179, 136, 0.65)"}
          image={ReactIcon}
          className={styles.webDesignCard}
        >
          <div className={styles.webDesignCardContent}>
            <h2>web design</h2>
            <p>{`I provide pixel perfect responsive design, with a codebase that is scalable and catering to expectation of the stakeholders`}</p>
          </div>
        </GradientCard>
        <GradientCard
          color1={"#9B59B6"}
          color2={"rgba(255, 115, 136, 0.65)"}
          image={NodeIcon}
          className={styles.webDesignCard}
        >
          <div className={styles.webDesignCardContent}>
            <h2>BACKEND API</h2>
            <p>{`Building services be it something new like GraphQL or that of relational database, I can switch between languages and craft backend APIs`}</p>
          </div>
        </GradientCard>
      </div>
    </div>
  )
}

export default ThingsIDo
