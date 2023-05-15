import React, { useState } from 'react'
import styles from "../SignUpForm/SignInUp.module.css"
import { Link } from "react-router-dom";
import Button from '../Button';



const LoginForm = () => {
  const [details, setDetails] = useState({
    email:"",
    password:""
  })
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setDetails({ ...details, [e.target.name]: e.target.value });
}

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(details.email, details.password)
   }

  return (
    <>
      <form action="" className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" value={details.email} onChange={handleChange} required />
        </div>
        <div className={styles.labelInput}>  <label htmlFor="password" >Password</label>
          <input type="password" name="password" id="password" value ={details.password} onChange={handleChange} required />
        </div>
        <Button type="submit" text={"Sign In"} styles={styles.button} />
      </form>
      <div><span>New User</span> <Link to="/signup" className={styles.link}> <span>Sign In</span></Link></div>
    </>
  )
}

export default LoginForm
