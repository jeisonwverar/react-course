import React,{useState,useEffect} from "react";

const Counter =()=>{

 const [counter,setCounter] = useState(10);
 useEffect(()=>{
    console.log('render')
 },[ counter])

    return <div>
        <h2>counter:{counter}</h2>
        <button onClick={()=>{
            setCounter(counter+10)
        }}>
            sumar
        </button>
    </div>
}


export default Counter;