import React from 'react'
import styles from "./Note.module.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Subnote from '../Subnote'
import { NoteType } from '../../State/noteTypes'
interface noteProps {
  note: {
    title: string,
    description: string
  }
}
const Note = ({ note }: noteProps) => {
  const x = useSelector((state: any) => state.notes)
  const subnotes = x.subNotes;
  return (
    <div className={styles.note}>
      <div className={styles.title}>
        <h3>{note.title}</h3>{" "}
      </div>
      <h3 className={styles.desc}>
        {note.description}</h3>
      <div className={styles.subnote}>
        {subnotes.length !== 0 ? (
          subnotes.map((note: NoteType, index: number) => {
            return <Subnote key={index} title={note.title} />
          })
        ):<h2>No Sub Note</h2>
          }
        {/* <Subnote title="deepak"/> */}
      </div>
      <div className={styles.icons}>
        <button className={styles.hovertext} data-hover="Edit">
          <i className="fas fa-pencil-alt"></i>
        </button >
        <Link to="/subnote"><button className={styles.hovertext} data-hover="Sub Note">
          <i className="fa-solid fa-plus"></i>
        </button>
        </Link>
        <button className={styles.hovertext} data-hover="Delete">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Note

