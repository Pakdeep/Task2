import React, { useState } from 'react'
import styles from "./CreateNote.module.css"
import Button from '../Button';
import { useDispatch } from 'react-redux';
interface noteProps {
  heading: string,
  text: string
}
const Createnote = ({ heading, text }: noteProps) => {

  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    description: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", payload: note });
  }

  return (
    <div className={styles.createNote}>
      <h1>{heading}</h1>
      <form action="" className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} autoComplete='off' />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={handleChange} autoComplete='off' />
        </div>
        <Button type="submit" text={text} styles={styles.button} />
      </form>

    </div>
  )
}

export default Createnote
