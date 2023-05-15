import React from 'react'
import Name from '../../components/Name/Name'
import Button from '../../components/Button'
import styles from "./Header.module.css" 
import Logo from '../../components/Logo'
import Id from '../../components/Id'
const Header = () => {

  return (
    <div className={styles.header}>
      <Id id="jaiswalpak450@gmail.com"/>
      <Logo style={styles.logo}/>
      <div className={styles.right}>
        <Name name="Deepak"/>  
        <Button text={"Log Out"} styles={styles.button}/>   
      </div>
    </div>
  )
}

export default Header
