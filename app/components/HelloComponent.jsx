import React from 'react';

//子组件
class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillMount() {
        console.log("<------Will Mount------->")
    }
    componentDidMount() {
        console.log("<------Did Mount------->")
    }
    componentWillReceiveProps(nextProps) {
        console.log("<------Will Receive Props------->" + nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps + "<------Component Update------->" + nextState);
        return true;
    }
    componentWillUpdate() {
        console.log("<------Will Update------->");
    }
    componentDidUpdate() {
        console.log("<------Did Update------->");
    }
    componentWillUnmount() {
        console.log("<------Will Unmount------->");
    }
    Increment() {
        var newCount = this.state.count + 1;
        this.setState({ count: newCount });
        this.props.getCount(newCount);
    }

    render() {
        return (
            <button onClick={this.Increment.bind(this)}> {this.props.buttonName}</button>
        )
    }
}
export default HelloComponent;