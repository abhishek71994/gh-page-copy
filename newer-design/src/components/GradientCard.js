import React from "react"
import classnames from "classnames"

import styles from "../assets/scss/GradientCard.module.scss"

export default props => {
  return (
    <div
      className={classnames(styles.cardContainer, props.className)}
      style={{
        background: `linear-gradient(114.68deg,${props.color1} 2.33%, ${props.color2} 100%)`,
      }}
    >
      {props.children}
      <img className={styles.cardImage} src={props.image} />
    </div>
  )
}
