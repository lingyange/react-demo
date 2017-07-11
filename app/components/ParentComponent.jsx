import React, { Component } from 'react'
import HelloComponent from './HelloComponent.jsx'

//父组件
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'按钮初始值',
            count: 0
        }
    }
    componentWillMount() {
        console.log("<------Father Will Mount------->")
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'game over'
            });
        }, 1000);
    }
    componentWillReceiveProps(nextProps) {
        console.log("<------Father Will Receive Props------->" + nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps + "<------Father Component Update------->" + nextState);
        return true
    }
    componentWillUpdate() {
        console.log("<------Father Will Update------->");
    }
    componentDidUpdate() {
        console.log("<------Father Did Update------->");
    }
    componentWillUnmount() {
        console.log("<------Father Will Unmount------->");
    }
    getCount(newCount) {
        this.setState({
            count: newCount
        })
    }
    render() {
        return (<div>
                <div>{this.state.count}</div>
                <HelloComponent buttonName={this.state.msg} getCount={this.getCount.bind(this)} />
            </div>)
    }
}
export default ParentComponent;