import React from 'react'
import styles from "../SignUpForm/SignInUp.module.css"
import {  Link } from "react-router-dom";
import Button from '../Button';

const LoginForm = () => {
  return (
    <>
      <form action="" className={styles.formWrapper}>
        <div className={styles.labelInput}>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.labelInput}>  <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <Button text='Sign In' styles={styles.button}/>
      </form>
      <div><span>New User</span> <Link to="/signup" className={styles.link}> <span>Sign In</span></Link></div>
    </>
  )
}

export default LoginForm
