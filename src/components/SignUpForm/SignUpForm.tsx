import React from 'react'
import styles from "./SignInUp.module.css"
import {  Link } from "react-router-dom";
import Button from '../Button';
const SignUpForm = () => {
  return (
    <>
      <form action="" className={styles.formWrapper}>
         <div className={styles.labelInput}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.labelInput}>  <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        {/* <button type="submit">Sign up</button> */}
        <Button text="Sign Up" styles={styles.button}/>
      </form>
      <div><span>Already A User</span> <Link to="/" className={styles.link}> <span>Sign In</span></Link></div>
      </>
  )
}

export default SignUpForm
