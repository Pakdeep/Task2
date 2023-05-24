import React from 'react'
interface nameProps{
  name:string
}
const Name = ({name}:nameProps) => {
  return (
      <h4>{name}</h4>
  )
}

export default Name
