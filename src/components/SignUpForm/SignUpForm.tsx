import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from 'react'
import styles from "./SignInUp.module.css"
import { useNavigate, Link } from "react-router-dom";
import Button from '../Button';
import { auth, db } from "../../Firebase/firebaseConfig"
import { useDispatch } from "react-redux";


const SignUpForm = () => {

const dispatch=useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(false)
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
      dispatch({type:"SIGN_UP",payload:res.user})
      navigate("/");

      // await setDoc(doc(db, "users", res.user.uid), {
      //   uid: res.user.uid,
      //   displayName: res.user.displayName,
      //   email: res.user.email
      // });
      // await setDoc(doc(db, "notes", res.user.uid), {});
    } catch (err) {      
      setErr(true)
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
