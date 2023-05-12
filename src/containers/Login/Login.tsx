import React from 'react'
import LoginForm from '../../components/LoginForm'
import Logo from '../../components/Logo'
import styles from "./InUp.module.css"
const Login = () => {
    return (
        <div className={styles.InUp}>
            <Logo style={styles.logo}/>
            <LoginForm />
        </div>
    )
}
export default Login
