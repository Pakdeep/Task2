import React from 'react'
import styles from "./Note.module.css"
interface noteProps {
  note: {
    title: string,
    description: string
  }
}
const Note = ({ note }: noteProps) => {
  return (
    <div className={styles.note}>
      <div className={styles.title}>
        <h3>{note.title}</h3>{" "}
      </div>
      <h3 className={styles.desc}>
        {note.description}</h3>
      <div className={styles.icons}>
        <button className={styles.hovertext} data-hover="Edit">
          <i className="fas fa-pencil-alt"></i>
        </button >
        <button className={styles.hovertext} data-hover="Sub Note">
        <i className="fa-solid fa-plus"></i>
        </button>
        <button className={styles.hovertext} data-hover="Delete">
          <i className="fas fa-trash-alt"></i>
        </button> 
      </div>
    </div>
  )
}

export default Note

