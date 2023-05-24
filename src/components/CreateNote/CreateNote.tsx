import React, { useEffect, useRef, useState } from 'react'
import styles from "./CreateNote.module.css"
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../Firebase/firebaseConfig';
import { doc, setDoc } from "firebase/firestore";
interface noteProps {
  heading: string,
  text: string
}
const Createnote = ({ heading, text }: noteProps) => {
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const x = useSelector((state: any) => state.auth)
  const user = x.user;
  const notes = useSelector((state: any) => state.notes)
  // const [notes,setNotes]=useState(y)
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    description: "",
    subNotes: []
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  // useEffect(()=>{
  //   setNotes({ ...notes, notes: [...notes.notes, note] })
  // },[y])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(notes)
    let z = dispatch({ type: "ADD_NOTE", payload: note });
    console.log(z)
    ref1.current.value = '';
    ref2.current.value = '';
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      notes: notes
    });
  }
  // useEffect(() => {
  //   const putNotes = async () => {
  //     await setDoc(doc(db, "users", user.uid), {
  //       name: user.displayName,
  //       notes: notes
  //     });
  //   }
  // })

  return (
    <div className={styles.createNote}>
      <h1>{heading}</h1>
      <form action="" className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor="title">Note Title</label>
          <input ref={ref1} type="text" name="title" id="title" onChange={handleChange} autoComplete='off' />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="description">Note Description</label>
          <input ref={ref2} type="text" name="description" className='description' id="description" onChange={handleChange} autoComplete='off' />
        </div>
        <Button type="submit" text={text} styles={styles.button} />
      </form>

    </div>
  )
}

export default Createnote
