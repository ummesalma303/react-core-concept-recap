export default function Products({info}) {
    const {message,phone}=info
    return (
        <div>
                <h2>Name</h2>
                <p>Message:{message}</p>
       </div>
    )
}