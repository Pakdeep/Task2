import React, { useState } from 'react'
import styles from "./CreateNote.module.css"
import Button from '../Button';

const Createnote = () => {
  const [note, setNote] = useState({
    title: "",
    description: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); console.log(note)
  }

  return (
    <div className={styles.createNote}>
      <h1>Add Note</h1>
      <form action="" className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} autoComplete='off' />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={handleChange} autoComplete='off' />
        </div>
        {/* <button className={styles.button} onClick={handleClick} >Add Note</button> */}
        <Button type="submit" text="Add Note" styles={styles.button} />
      </form>

    </div>
  )
}

export default Createnote
