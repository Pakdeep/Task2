import React, { useState } from 'react'
import styles from "../SignUpForm/SignInUp.module.css"
import { Link, useNavigate } from "react-router-dom";
import Button from '../Button';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { SIGN_IN } from '../../State/actions';


const LoginForm = () => {
const dispatch=useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(false)
  const [details, setDetails] = useState({
    email:"",
    password:""
  })
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setDetails({ ...details, [e.target.name]: e.target.value });
}

  const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const res=await signInWithEmailAndPassword(auth, details.email, details.password)
      dispatch({type:SIGN_IN,payload:res.user})
      navigate("/")
    }
    catch(err){
      setErr(true);
    }
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
