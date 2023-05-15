import React from 'react'
interface nameProps{
  name:string
}
const Name = ({name}:nameProps) => {
  return (
      <h3>{name}</h3>
  )
}

export default Name
