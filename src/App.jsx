import { useState } from "react"
import Header from "./components/Header"
import PostList from "./components/PostList"

export default function App() {
    const [isPosting, setIsPosting] = useState(false)

    function handleClose() {
        setIsPosting(false)
    }

    function handleOpen() {
        setIsPosting(true)
    }
    
    return (<>
        <Header onClickNewPost={handleOpen}/>
        <main>
            <PostList isPosting={isPosting} onStopPosting={handleClose}/>
        </main> 
    </>)
}