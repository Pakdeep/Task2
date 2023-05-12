import React from 'react'
import Note from '../../components/Note'
import styles from "./Notes.module.css"
const Notes = () => {
  return (
    <>
    <h1>Your Notes</h1>
    <div className={styles.notes}>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
    </div></>
  )
}

export default Notes
