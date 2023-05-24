import { useLocation } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

const ShowSubnote = () => {
const location = useLocation()
  const { from } = location.state
  console.log(from)
  const x=useSelector((state:any)=>state.notes)
  const notes=x.notes;
  console.log(notes)
  return (
    <div>      
      This is subnote page 
    </div>
  )
}

export default ShowSubnote
