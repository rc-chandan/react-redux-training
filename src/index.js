/**
 * @author rc-chandan
 * 
 * Entry file of the app
 * This is used to bootstrap various components
 *  - like initializing the store
 *  - mounting the App component to the html page etc.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

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

// Mount the APP to html div with id root
ReactDOM.render(<App />, document.getElementById('root'));

// Fancy stuff done by fb developers to speed up the app loading
registerServiceWorker();
