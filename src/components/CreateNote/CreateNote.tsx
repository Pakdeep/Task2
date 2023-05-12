import React from 'react'
import styles from "./CreateNote.module.css"
import Button from '../Button'
const Createnote = () => {
  return (
    <div className={styles.createNote}>
      <h1>Add Note</h1>
      <form action="" className={styles.formWrapper}>
        <div className={styles.labelInput}> 
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" />
        </div>
        <Button text="Add Note" styles={styles.button}/>
      </form>

    </div>
  )
}

export default Createnote
