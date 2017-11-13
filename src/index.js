import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import TodoApp from './containers/TodoApp';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

// Redux Store setup
const store = createStore(reducer, composeWithDevTools());

// Redux Store provided App component
const App = props => (
    <Provider store={store}>
        <TodoApp />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
