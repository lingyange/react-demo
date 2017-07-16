import React, {Component} from 'react'
import HelloComponent from './HelloComponent.jsx'

//父组件
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '按钮初始值',
            count: 0,
            childMsg: '我来自父组件',
            data: [
                {
                    tagName: "第一个标题头",
                    index: "--1"
                }, {
                    tagName: "第二个标题头",
                    index: "--2"
                }, {
                    tagName: "第三个标题头",
                    index: "--3"
                }, {
                    tagName: "第四个标题头哈哈",
                    index: "--4"
                }
            ]
        }
    }
    componentWillMount() {
        console.log("<------Father Will Mount------->")
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({msg: 'game over'});
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
        this.setState({count: newCount})
    }
    getChild() {
        let fatherMsg = this.state.childMsg;
        this
            .refs
            .sendChild
            .sendChildState(fatherMsg);
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <HelloComponent
                    ref="sendChild"
                    buttonName={this.state.msg}
                    getCount={this
                    .getCount
                    .bind(this)}/>
                <button
                    onClick={this
                    .getChild
                    .bind(this)}>我是来自父组件按钮~~~</button>
                <ul>
                    {this
                        .state
                        .data
                        .map((item,i) => {
                            return (
                                <li key={i}>{item.tagName + item.index}</li>
                            )
                        })}
                </ul>
            </div>
        )
    }
}
if(module.hot){
    console.log("热部署成功")
}else{
    console.log("热部署失败");
}
export default ParentComponent;