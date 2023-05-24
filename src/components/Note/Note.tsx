import React from 'react'
import styles from "./Note.module.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Subnote from '../Subnote'
import { NoteType } from '../../State/noteTypes'
import { REMOVE_NOTE, UPDATE_NOTE } from '../../State/actions'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
interface noteProps {
  note:NoteType
}
const Note = ({ note }: noteProps) => {  
  const dispatch = useDispatch();
  const x = useSelector((state: any) => state.auth)   
  const user = x.user;
  const notes = useSelector((state: any) => state.notes)
  return (
    <div className={styles.note}>
      <div className={styles.title}>
        <h3>{note.title}</h3>{" "}
      </div>
      <h4 className={styles.desc}>
        {note.description}</h4>
      <div className={styles.subnote}>
        {note.subNotes.length !== 0 ? (
          note.subNotes.map((note: NoteType, index: number) => {
            return <Subnote key={index} title={note.title} id={index} />
          })
        ) : <h4>No Sub Note</h4>
        }
      </div>
      <div className={styles.icons}>
        <button className={styles.hovertext} data-hover="Edit" onClick={() => {
          dispatch({ type: UPDATE_NOTE })
        }}>
          <i className="fas fa-pencil-alt"></i>
        </button >
        <Link to="/create/subnote"><button className={styles.hovertext} data-hover="Sub Note">
          <i className="fa-solid fa-plus"></i>
        </button>
        </Link>
        <button className={styles.hovertext} data-hover="Delete" onClick={async() =>{
          dispatch({ type: REMOVE_NOTE,payload:note.title});
          await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            notes: notes
          });        
        }}          
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Note

