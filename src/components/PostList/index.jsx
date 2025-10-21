import { useState } from "react"
import Post from "../Post"
import Modal from "../Modal"
import NewPost from "../NewPost"
import styles from "./PostList.module.css"

export default function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([])

    function addPostHandler(postData) {
        setPosts((existingPost) => ([postData, ...existingPost]))
    }

    return (<>
        {
         isPosting && 
            <Modal onClose={onStopPosting}>
                <NewPost 
                    onAddPost={addPostHandler}
                    onCancel={onStopPosting}
                />
            </Modal>
        }   
        {
            posts.length > 0 && (
                <ul className={styles.ul}>
                    { posts.map(post => (<Post key={post.body} author={post.author} body={post.body}/>)) }
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