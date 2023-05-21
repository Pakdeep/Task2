import React, { useEffect } from 'react'
import Note from '../../components/Note'
import styles from "./Notes.module.css"
import { useSelector } from 'react-redux'
import { NoteType } from '../../State/noteTypes'
// import { doc, getDoc } from "firebase/firestore";
// import { db } from '../../Firebase/firebaseConfig'

const Notes = () => {
  const x = useSelector((state: any) => state.notes)
  const notes = x.notes;
  // const y=useSelector((state: any) => state.auth)
  // const currentUser=y.user;
  // const docRef = doc(db, "users", currentUser.uid);
  // useEffect(()=>{
  //   const getNotes=async()=>{
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
  // },[])
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
