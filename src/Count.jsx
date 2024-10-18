import { useState } from "react";

export default function Count() {

    const [count,setCount]=useState(0)

    function increaseClick() {
        // const newCount = count + 1;
        setCount(count+1)
    }
   



    let counter = 0;
    function increaseClick2() {
        counter = counter + 1
        console.log(counter);
    }
   
    function show(message) {
    console.log(message);
    }
    return (
        <div>
            <button onClick={()=>show('this is a new message')}>Click</button>
            <br />
            <h2>{ count}</h2>
            <button onClick={increaseClick}>increase</button>
            <button>decrease</button>
            <br />
            <h2>{ counter}</h2>
            <button onClick={increaseClick2}>increase</button>
            <button>decrease</button>
        </div>
    )
}