import React from 'react'
import style from "./Id.module.css"
interface idProps{
  id:string;
}
const Id = ({id}:idProps) => {
  return (
    <div className={style.id}><h3>{id}</h3></div>
  )
}

export default Id
