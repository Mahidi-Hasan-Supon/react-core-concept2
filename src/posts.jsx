import { use } from "react"
import Post from "./post"

export default function Posts({messagePosts}){
    const posts = use(messagePosts)
    console.log(posts)
    return (

        <div className="card">
            <h4>Posts: {posts.length}</h4>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)

            }
            
        </div>
    )
}