import React from 'react'
import styles from "./Note.module.css"
const Note = () => {
  return (
    <div className={styles.note}>
      <div className={styles.title}>        
        <h3>title</h3>{" "}       
      </div>
      <h3 className={styles.desc}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur iure harum placeat soluta ipsum maxime, ullam consequatur minus dolor.      </h3>
      <div className={styles.icons}>
        <button>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Note

