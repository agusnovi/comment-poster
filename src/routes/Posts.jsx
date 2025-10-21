import { Outlet } from "react-router-dom"

import PostList from "../components/PostList"

export default function Posts() {    
    return (<>
        <Outlet />
        <main>
            <PostList />
        </main> 
    </>)
}

export async function fetchPosts() {
    const response = await fetch("http://localhost:8080/posts")
    const data = await response.json()
    
    return data.posts
}