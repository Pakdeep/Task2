import React,{ButtonHTMLAttributes} from 'react'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    styles?: string,
}

const Button = ({text,styles,onClick,type}:buttonProps) => {
  return (
      <button type={type} className={styles} onClick={onClick}>{text}</button>
  )
}

export default Button
