import { useState, useEffect } from "react"
import Post from "../Post"
import Modal from "../Modal"
import NewPost from "../NewPost"
import styles from "./PostList.module.css"

export default function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        async function fetchPosts(){
            setIsFetching(true)
            const res = await fetch('http://localhost:8080/posts')
            const resData = await res.json()

            setPosts(resData.posts)
            setIsFetching(false)
        }

        fetchPosts()
    }, [])

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
            !isFetching && posts.length > 0 && (
                <ul className={styles.ul}>
                    { posts.map(post => (<Post key={post.id} author={post.author} body={post.body}/>)) }
                </ul>
            )
        }
        {
            !isFetching && posts.length === 0 && (
                <div>
                    <h1>Opss...</h1>
                    <p>No data here...</p>
                </div>
            )
        }
        {
            isFetching && (
                <p>Loading....</p>
            )
        }
        
    </>)
}