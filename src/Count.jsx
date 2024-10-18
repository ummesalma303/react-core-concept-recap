import { useEffect, useState } from "react";
import Service from "./Service";
import Servicess from "./Servicess";

export default function Count() {

    // const [count, setCount] = useState(0);
    const [stack, setCondition] = useState(false);
    // console.log(!stack);

    function condition() {
        setCondition(!stack)
    }
    
function transfer(message) {
    console.log(message);
}
    // useEffect(() => {
        // console.log('hello from use effect');
    // },[count])

    // function increaseClick() {
    //     setCount(count+1)
    // }   



    // let counter = 0;
    // function varClick() {
    //     counter = counter + 1;
    //     // console.log(counter);
    // }

    // console.log("counter");
    function show(message) {
    console.log(message);
    }
    return (
        <div>
            <button onClick={()=>show('this is a new message')}>Click</button>
            <br />
            {/* <h2>{ count}</h2> */}
            {/* <button onClick={increaseClick}>stack click</button> */}
            {/* <button onClick={varClick}>variable click</button> */}
            <button onClick={condition}>Condition</button>
            {/* {
                stack?<Service transfer={transfer}></Service>:<Servicess></Servicess>
            } */}
            <Service transfer={transfer}></Service>
        </div>
    )
}