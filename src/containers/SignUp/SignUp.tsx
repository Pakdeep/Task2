import React from 'react'
import SignUpForm from '../../components/SignUpForm'
import styles from "../Login/InUp.module.css"
import Logo from '../../components/Logo'
const SignUp = () => {
  return (
    <div className={styles.InUp}>
    <Logo style={styles.logo}/>
    <SignUpForm />
</div>
  )
}

export default SignUp

