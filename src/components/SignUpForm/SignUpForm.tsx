import React, { useState } from 'react'
import styles from "./SignInUp.module.css"
import { Link } from "react-router-dom";
import Button from '../Button';

const SignUpForm = () => {
  const [details, setDetails] = useState({
    name:"",
    email:"",
    password:""
  })
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setDetails({ ...details, [e.target.name]: e.target.value });
}
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(details.email, details.password, details.name)

  }
  return (
    <>
      <form action="" className={styles.formWrapper} onSubmit={submitHandler}>
        <div className={styles.labelInput}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={details.name} onChange={handleChange} required />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" value={details.email} onChange={handleChange} required />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={details.password} onChange={handleChange} required />
        </div>
        <Button type="submit" text="Sign Up" styles={styles.button} />
      </form>
      <div><span>Already A User</span> <Link to="/" className={styles.link}> <span>Sign In</span></Link></div>
    </>
  )
}

export default SignUpForm
