import React from 'react'
import Note from '../../components/Note'
import styles from "./Notes.module.css"
import { useSelector } from 'react-redux'
import { NoteType } from '../../State/noteTypes'

const Notes = () => {
  const notes= useSelector((state: any) => state.notes)
 console.log(notes.notes)
  return (
    <>
      <h1>Your Notes</h1>
      <div className={styles.notes}>
        {
         notes.notes.map((note:NoteType, index: number) => {
            return <Note note={note} key={index} />
          })
        }        
      </div></>
  )
}

export default Notes
