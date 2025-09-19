import React,{useState} from "react";
import "../styles/CounterFunctional.css";



function CounterFunctional() {

    const[count, setCount] =useState(0);

const Increment = ()=>{
    setCount(count+1);
}
const Decrement = ()=>{
    if(count>0){
    setCount(count-1)
    }
}

    return (
        <div className="Main-container">
            <div className="counter-card">
                <h1>Functional components</h1>
                <div className="counter-display">{count}  </div>
                <div className="counter-buttons">
                    <button onClick={Increment}>+</button>
                    
                    <button onClick={Decrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CounterFunctional