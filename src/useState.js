import React, { useState,useEffect } from 'react'; 

function Example () {
    // 代替 state setState 
    const [count,setCount] = useState(0);
    // 代替生命周期函数
    useEffect(()=>{
        console.log('useEffect',count)
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
 
export default Example;
