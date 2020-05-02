import React from "react"
import classnames from "classnames"

import styles from "../assets/scss/solidButton.module.scss"

export default props => {
  return (
    <div className={classnames(styles.buttonContainer, props.className)}>
      <button>{props.children}</button>
    </div>
  )
}
