import React from 'react';

import styles from '../../assets/scss/v2/index.module.scss';
import logo from '../../images/ap_logo.svg';
const Index = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.header}>
        <img src={logo} alt="" />
        <div className={styles.headerRight}>
          <a target="_blank" href="https://medium.com/@abhishek71994">Blogs</a>
          <a target="_blank" href="https://calendly.com/abhi_hk95/15min">Talk to me</a>
        </div>
      </div>
      <div className={styles.Landing}>
        <p>Hi, I'm Abhishek.</p>
        <p>Full time developer 💻</p>
        <p>Sometimes I get imposter's syndrome 🙁</p>
        <p>I like coffee, books and music ☕📚🎸</p>
        <p>Buy me coffee and I'll pair program with you 😄</p>
        <a target="_blank" href="https://calendly.com/abhi_hk95/15min"><button className={styles.ghostButton}>Buy coffee ☕</button></a>
      </div>
    </div>
  )
}

export default Index;