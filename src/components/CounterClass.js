import React, { Component } from "react";

import '../styles/CounterClass.css'

class CounterClass extends Component {

    constructor() {
        super(); 
            this.state = {
                count: 0
            }
        
    }


    Increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    Decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }

    }
    render() {
        return (
            <div className="Main-container">
                <div className="counter-card">

                    <h1>Class Components</h1>

                    <div className="counter-display">{this.state.count}</div>
                    <div className="counter-buttons">
                        <button onClick={this.Increment}>+</button>
                        <button onClick={this.Decrement}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterClass;