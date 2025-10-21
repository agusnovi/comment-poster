import { Link } from "react-router-dom"

import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Poster Comment</h1>
            <p>
                <Link to="/create-post" className={styles.button}>New Post</Link>
            </p>
        </header>
    )
}