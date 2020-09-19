import React from 'react';
import styles from '../assets/scss/headerText.module.scss';

export default (props) => {
  return(
    <div className={styles.headerText}>
      <h2>{props.children}</h2>
    </div>
  )
}