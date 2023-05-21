import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react'
import styles from "./SignInUp.module.css"
import { useNavigate, Link } from "react-router-dom";
import Button from '../Button';
import { auth, db } from "../../Firebase/firebaseConfig"
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP,SIGNUP_ERROR } from "../../State/actions";
import { doc, setDoc } from "firebase/firestore";


const SignUpForm = () => {


const notes=useSelector((state:any)=>state.notes)
// console.log(notes)
const dispatch=useDispatch();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res: any;
    try {
      res = await createUserWithEmailAndPassword(auth, details.email, details.password)
      await updateProfile(res.user, {
        displayName: details.name,
      })
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        name:res.user.displayName,
        notes:notes

      });      
      dispatch({type:SIGN_UP,payload:res.user})
      navigate("/");      
    } catch (err) {   
      console.log(err)   
      dispatch({type:SIGNUP_ERROR})
    }
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
      <div><span>Already A User</span> <Link to="/login" className={styles.link}> <span>Sign In</span></Link></div>
    </>
  )
}

export default SignUpForm
