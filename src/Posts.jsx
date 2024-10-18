import './Post.css'

export default function Posts({ post }) {
    const {userId,id,title,body} = post;
    return (
        <div className='postStyle'>
            <h4>Title:{ title}</h4>
            <p>userId:{ userId}</p>
            <p>postId:{id}</p>
            <p>{ body}</p>
       </div>
    )
}