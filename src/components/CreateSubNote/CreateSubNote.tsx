import React, { useState } from 'react'
import styles from "./CreateSubNote.module.css"
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateSubnote = () => {
const navigate=useNavigate();
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    description: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_SUBNOTE", payload: note });
    navigate("/")
  }

  return (
    <div className={styles.createSubNote}>
      <h1>Add a Sub Note</h1>
      <form action="" className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} autoComplete='off' />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={handleChange} autoComplete='off' />
        </div>
        <Button type="submit" text="Sub Note" styles={styles.button} />
      </form>
    </div>

  )
}

export default CreateSubnote
