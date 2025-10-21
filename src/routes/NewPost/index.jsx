import { Form, Link, redirect } from "react-router-dom"

import Modal from "../../components/Modal"

import styles from "./NewPost.module.css"

export default function NewPost() {
    return (
        <Modal>
            <Form method="POST" className={styles.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required name='body'/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input id="author" required type="text" name='author'/>
                </p>
                <p className={styles.actions}>
                    <Link to="/">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export async function submitPost({request}) {
    const data = await request.formData()

    const postData = Object.fromEntries(data)

    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return redirect("/")
}