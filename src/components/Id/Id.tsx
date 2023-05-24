import React from 'react'
import style from "./Id.module.css"
interface idProps{
  id:string;
}
const Id = ({id}:idProps) => {
  return (
    <div className={style.id}><h4>{id}</h4></div>
  )
}

export default Id
