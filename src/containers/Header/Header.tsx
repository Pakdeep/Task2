import React, { useEffect, useState } from 'react'
import Name from '../../components/Name/Name'
import Button from '../../components/Button'
import styles from "./Header.module.css"
import Logo from '../../components/Logo'
import Id from '../../components/Id'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SIGN_OUT } from '../../State/actions'
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let  x = useSelector((state: any) => state.auth)
   const [name,setName]=useState("")
   const [id,setId]=useState("")
  const currentUser = x.user;
  useEffect(()=>{
    setName(currentUser.displayName);
    setId(currentUser.email);
    // eslint-disable-next-line
  },[])
  return (
    <div className={styles.header}>
      <Id id={id} />
      <Logo style={styles.logo} />
      <div className={styles.right}>
        <Name name={name} />
        <Button text={"Log Out"} styles={styles.button} 
        onClick={() => {
          signOut(auth);
          dispatch({ type: SIGN_OUT });
          navigate("/login")
        }} />
      </div>
    </div>
  )
}

export default Header
