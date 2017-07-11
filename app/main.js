import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import ParentComponent from './components/ParentComponent.jsx';
import Counter from './components/Counter.jsx';
import counter from './reducers'

ReactDom.render(
    <ParentComponent />,
    document.getElementById('content')
);

const store = createStore(counter)

const render = () => {
    ReactDom.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);

