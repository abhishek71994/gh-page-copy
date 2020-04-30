import React from "react"

import HeaderText from "../components/headerText"

import styles from "../assets/scss/ThingsIDo.module.scss"

const ThingsIDo = () => {
  return (
    <div className={styles.thingsContainer}>
      <HeaderText>{`Things I do`}</HeaderText>
    </div>
  )
}

export default ThingsIDo
