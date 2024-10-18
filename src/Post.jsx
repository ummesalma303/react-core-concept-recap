import { useEffect, useState } from "react"
import Posts from "./Posts";

export default function Post() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
        
    },[])
    return (
        <div>
            {
                posts.map(post => <Posts post={post}></Posts>)
                
        }
        </div>
    )
}