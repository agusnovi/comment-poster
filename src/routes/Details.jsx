import { useLoaderData } from "react-router-dom"

import Modal from "../components/Modal"

import styles from "./Details.module.css"

export default function Details() {
    const detail = useLoaderData()

    if(!detail) {
        return (
            <Modal>
                <main className={styles.details}>
                    <p className={styles.text}>No data here..!</p>
                </main>
            </Modal>
        )
    }

    return (
        <Modal>
            <main className={styles.details}>
                <h1 className={styles.text}>{detail.author}</h1>
                <p className={styles.text}>{detail.body}</p>
            </main>
        </Modal>
    )
}

export async function fetchDetail({params}) {
    const response = await fetch("http://localhost:8080/posts/" + params.id)
    const data = await response.json()

    return data.post
}