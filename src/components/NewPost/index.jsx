import { useState } from "react"
import styles from "./NewPost.module.css"

export default function NewPost({
    onCancel,
    onAddPost,
}) {
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')

    function handleChangeAuthor(text) {
        setAuthor(text.target.value)
    }

    function handleChangeBody(text) {
        setBody(text.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const postData = {author,body}
        onAddPost(postData)
        onCancel()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required onChange={handleChangeBody} name='body' value={body}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input id="author" required type="text" onChange={handleChangeAuthor} name='author' value={author}/>
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}