import React from 'react';

//子组件
class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            childMsg: "我来自子组件---初始化"
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
    sendChildState(msg) {
        this.setState({
            childMsg:msg
        })
        
        console.log(this.state.childMsg);
    }
    render() {
        return (
            <button onClick={this.Increment.bind(this)}> {this.props.buttonName},"显示一下:>>>>"+{this.state.childMsg}</button>
        )
    }
}
export default HelloComponent;