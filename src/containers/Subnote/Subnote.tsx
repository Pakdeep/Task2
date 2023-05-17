import React from 'react'
import Header from '../Header'
import styles from "../Home/Home.module.css"
import CreateSubnote from '../../components/CreateSubNote'
const Subnote = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <CreateSubnote />
    </div>
  )
}

export default Subnote;
