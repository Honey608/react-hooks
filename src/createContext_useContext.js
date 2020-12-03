import React, { useState,useEffect, useContext, createContext } from 'react';

const CountContext = createContext();

function Counter() {
    let count = useContext(CountContext)
    return (
        <p>子组件接收父组件的值 {count}</p>
    )
}

function Example () {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(count)
    })
    return (
        <div>
            <p>父组件的值 {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example