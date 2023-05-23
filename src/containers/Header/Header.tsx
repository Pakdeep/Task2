import React, { useEffect, useState } from 'react'
import Name from '../../components/Name/Name'
import Button from '../../components/Button'
import styles from "./Header.module.css"
import Logo from '../../components/Logo'
import Id from '../../components/Id'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth} from '../../Firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import {GET_USER, SIGN_OUT } from '../../State/actions'
import { useDispatch } from 'react-redux'
const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [name, setName] = useState("" as any);
  const [id, setId] = useState("" as any);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        setId(user.email);      
        dispatch({type:GET_USER,payload:user})        
      }
    });
  }, []);
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
