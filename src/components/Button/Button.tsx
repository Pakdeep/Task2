import React from 'react'
interface buttonProps{
    text: string,
    styles: string
}

const Button = ({text,styles}:buttonProps) => {
  return (
      <button className={styles}>{text}</button>
  )
}

export default Button
