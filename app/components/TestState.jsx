import React, {Component} from 'react';

class TestState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
        // this.setState((prevState, props) => ({
        //     count: prevState.count + 1
        // }));
        //this.setState({     count: this.state.comut + 1 });
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>+</button>
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export default TestState;