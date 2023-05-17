import React from 'react'
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
  const x = useSelector((state: any) => state.auth)
  const currentUser = x.user;
  return (
    <div className={styles.header}>
      <Id id={currentUser.email} />
      <Logo style={styles.logo} />
      <div className={styles.right}>
        <Name name={currentUser.displayName} />
        <Button text={"Log Out"} styles={styles.button} onClick={() => { signOut(auth); dispatch({ type: SIGN_OUT }); navigate("/login") }} />
      </div>
    </div>
  )
}

export default Header
