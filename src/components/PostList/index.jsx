import { useLoaderData } from "react-router-dom"

import Post from "../Post"

import styles from "./PostList.module.css"

export default function PostList() {
    const posts = useLoaderData()

    return (<> 
        {
            posts.length > 0 && (
                <ul className={styles.ul}>
                    { posts.map(post => (<Post key={post.id} idPost={post.id} author={post.author} body={post.body}/>)) }
                </ul>
            )
        }
        {
            posts.length === 0 && (
                <div>
                    <h1>Opss...</h1>
                    <p>No data here...</p>
                </div>
            )
        }
    </>)
}
