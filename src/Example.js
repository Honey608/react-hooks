import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    render() { 
        return ( 
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.addClick.bind(this)}>click me</button>
            </div>
         );
    }
    componentDidMount () {
        console.log('componentDidMount' , this.state.count)
    }
    componentDidUpdate () {
        console.log('componentDidUpdate' , this.state.count)
    }
    addClick () {
        this.setState({count:this.state.count+1})
    }
}
 
export default Example;
