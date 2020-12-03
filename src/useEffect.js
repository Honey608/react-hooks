import React, { useState,useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


function Index() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')
        return ()=>{
            console.log('离开Index页面')
        }
    },[])
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}

function Example () {
    // 代替 state setState 
    const [count,setCount] = useState(0);
    // 代替生命周期函数
    useEffect(()=>{
        console.log('useEffect',count)
        return ()=>{
            console.log('===============')
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
 
export default Example;
