# react-demo

1、子组件调用父组件的方法，修改父组件的属性

子组件调用父组件的方法是通过this.props.xxx来调用的，其中XXX来自父组件中调用子组件时的传参，参数值或者参数方法来自父组件。
通过该方法就可以用子组件的方法修改父组件的属性。（注意this的指向问题）-----子组件调用父组件方法，修改父组件属性

2、父组件调用子组件的方法，修改子组件的属性

在子组件上传ref参数，参数值随意，父组件调用子组件方法时，先通过this.refs.参数值.子组件方法(修改子组件属性的方法),可传入父组件参数，
通过此次传参，就讲父组件的数据传给了子组件，子组件根据这个参数改变自身的属性 ----父组件调用子组件的方法，修改子组件属性

3、热部署方法

热部署是通过node服务器在本地更新的，所以必须在本地启动一个node服务器，引入webpack-hot-middleware插件实现自动编译并更新。解析jsx语法需要加载
react-hot-loader，否则会出现编译失败
