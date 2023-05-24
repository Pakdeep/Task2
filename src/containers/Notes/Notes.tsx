import React, { useEffect } from 'react'
import Note from '../../components/Note'
import styles from "./Notes.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { NoteType } from '../../State/noteTypes'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { FETCH_NOTES } from '../../State/actions'

const Notes = () => {
  const x = useSelector((state: any) => state.notes)
  const notes = x.notes;
  const dispatch = useDispatch();
  const y = useSelector((state: any) => state.auth)
  const user = y.user;
  useEffect(() => {
    const getNotes=async()=>{
      const docSnap = await getDoc(doc(db, "users", user.uid));
      console.log(user.displayName)
      if (docSnap.exists()) {
        const y = docSnap.data();
        const notes = (y.notes).notes;
        console.log(y)
        notes.map((note: any) => {
          return (dispatch({ type: FETCH_NOTES, payload: note }))
        })
      } else {
        console.log("No such document!");
      }
    } 
    getNotes();    
   },[user])
  return (
    <>
      <h1>Your Notes</h1>
      <div className={styles.notes}>
        {
          notes.length !== 0 ? (
            notes.map((note: NoteType, index: number) => {
              return <Note note={note} key={index} />
            })
          ) : <h1>No notes</h1>
        }
      </div></>
  )
}

export default Notes
