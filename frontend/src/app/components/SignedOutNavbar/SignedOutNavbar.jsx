import React from 'react'
import styles from './SignedOutNavbar.module.css';

const SignedOutNavbar = () => {
  
  return (
    <div className={styles.navbar}>
      <a className={styles.logoArea}href="/"><img className={styles.logo} src="Logo.png"></img></a>
      <div className={styles.links}>
        <a className={styles.link} id='login' href="/login">Log in</a>
        <a className={styles.link} id ='signup'href="/signup">Sign up</a>
        <a className={styles.link} id='aboutus'href="/aboutus">About us</a>
      </div>
    </div>
  )
}

export default SignedOutNavbar;