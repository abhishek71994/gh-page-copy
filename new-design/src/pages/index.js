import React from 'react'
import badgeImage from '../assets/images/badgeimg.jpg'
import styles from '../assets/scss/home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SEO from '../components/seo'

// Add all icons to the library so you can use it in your page
library.add(fas, fab)

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <div className={styles.home}>
      <div className={styles.heroSection}>
        <div className={styles.heroHorizontal}>
          <div className={styles.herophoto}>
            <img src={badgeImage} alt={'badge image'} />
          </div>
          <div className={styles.contentSection}>
            <h2>Abhishek Prasad</h2>
            <h6>Software engineer</h6>
            <h6>Musician</h6>
            <h6>Aspiring minimalist</h6>
          </div>
        </div>
        <div className={styles.heroIconSection}>
          <a href={'https://www.github.com/abhishek71994'} target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
          </a>
          <a href={'https://www.linkedin.com/in/abhi-hk95/'} target='_blank'>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='lg' />
          </a>
          <a href={'https://medium.com/@abhishek71994'} target='_blank'>
            <FontAwesomeIcon icon={['fab', 'medium']} size='lg' />
          </a>
          <a href={'https://dev.to/abhishek71994'} target='_blank'>
            <FontAwesomeIcon icon={['fab', 'dev']} size='lg' />
          </a>
          <a href={'https://twitter.com/abhi_hk95'} target='_blank'>
            <FontAwesomeIcon icon={['fab', 'twitter']} size='lg' />
          </a>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
