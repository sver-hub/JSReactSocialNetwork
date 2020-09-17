import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/reduxStore'

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App {...store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscribe(renderApp);
renderApp();
