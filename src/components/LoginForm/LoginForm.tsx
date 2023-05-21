import React, { useEffect, useState } from 'react'
import styles from "../SignUpForm/SignInUp.module.css"
import { Link, useNavigate } from "react-router-dom";
import Button from '../Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../Firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { SIGN_IN, SIGNIN_ERROR } from '../../State/actions';
import { doc, getDoc } from "firebase/firestore";
import { collection, DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setData]=useState();
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }
  
//   useEffect(
//     const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
//   );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, details.email, details.password)
      dispatch({ type: SIGN_IN, payload: res.user })    
      navigate("/")
    }
    catch (err) {
      dispatch({ type: SIGNIN_ERROR })
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
          <input type="password" name="password" id="password" value={details.password} onChange={handleChange} required />
        </div>
        <Button type="submit" text={"Sign In"} styles={styles.button} />
      </form>
      <div><span>New User</span> <Link to="/signup" className={styles.link}> <span>Sign Up</span></Link></div>
    </>
  )
}

export default LoginForm
