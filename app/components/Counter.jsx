import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.state={
            test:1
        }
    }
    componentDidMount() {
        let count = 2;
        this.setState({
            test:count++
        },function(){
            console.log(this.state.test);
        })
    }
    componentDidUpdate(){
        console.log(this.state.test)
    }
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }
    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        let _state = this.state.test;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>Increment if odd~~~</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment async</button>
                <span>测试  {_state} </span>
            </p>
        )
    }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;