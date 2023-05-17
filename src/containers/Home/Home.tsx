import React from 'react'
import Header from '../Header'
import styles from "./Home.module.css"
import CreateNote from '../../components/CreateNote'
import Notes from '../Notes'
const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <CreateNote heading='Add a Note' text="Add Note"/>
      <Notes/>
    </div>
  )
}

export default Home
