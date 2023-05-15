import React from 'react'
import Note from '../../components/Note'
import styles from "./Notes.module.css"
import { useSelector } from 'react-redux'
import { FetchNotes } from '../../State/noteTypes'



const Notes = () => {
  const notes= useSelector((state: FetchNotes) => state.notes)
 console.log(notes.notes)
  return (
    <>
      <h1>Your Notes</h1>
      <div className={styles.notes}>
        {
         notes.notes.map((note, index: number) => {
            return <Note note={note} key={index} />
          })
        }
        {/* <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/> */}
      </div></>
  )
}

export default Notes
