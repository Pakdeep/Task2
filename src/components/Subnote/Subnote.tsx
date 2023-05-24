import React from 'react'
import styles from "./subnote.module.css"
import { Link } from 'react-router-dom'
interface noteType {
  id: number,
  title: string
}
const Subnote = ({ title }: noteType) => { 
  return (
    <div className={styles.subnote}>
      <Link to="/subnote" state={{ from: {title} }}><p>{title}</p></Link>
    </div>
  )
}

export default Subnote
