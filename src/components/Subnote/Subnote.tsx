import React from 'react'
import styles from "./subnote.module.css"
interface noteType{
title:string
}
const Subnote = ({title}:noteType) => {
  
  return (
    <div className={styles.subnote}>
    <p>{title}</p>
    </div>
  )
}

export default Subnote