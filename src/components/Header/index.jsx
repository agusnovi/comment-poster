import styles from "./Header.module.css"

export default function Header({onClickNewPost}) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Poster Comment</h1>
            <p><button onClick={onClickNewPost} className={styles.button}>New Post</button></p>
        </header>
    )
}