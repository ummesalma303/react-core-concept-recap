export default function Service({ transfer }) {
    // console.log(transfer);
    return ( 
        <>
        <h2>I am from Service</h2>
        <button onClick={()=>transfer('service data')}>click from service</button>
        </>
    )
}