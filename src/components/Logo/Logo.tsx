import React from 'react'
import styles from "./Logo.module.css"

interface logoProps {
    style: string
}
const Logo = ({ style }: logoProps) => {
    return (
        <div className={style}>
            <span
                className={styles.cloud}
            >
                Cloud
            </span>
            <span
                className={styles.notebook}
            >
                NoteBook
            </span>
        </div>
    )
}

export default Logo
