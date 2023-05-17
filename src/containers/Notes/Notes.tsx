import React from 'react'
import Note from '../../components/Note'
import styles from "./Notes.module.css"
import { useSelector } from 'react-redux'
import { NoteType } from '../../State/noteTypes'

const Notes = () => {
  const x= useSelector((state: any) => state.notes)
const notes=x.notes;
  return (
    <>
      <h1>Your Notes</h1>
      <div className={styles.notes}>
        {
          notes.length!==0 ? (
            notes.map((note:NoteType, index: number) => {
               return <Note note={note} key={index} />
             })
          ): <h1>No notes</h1>
        }        
      </div></>
  )
}

export default Notes
