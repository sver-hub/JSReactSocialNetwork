import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/reduxStore'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscribe(renderApp);
renderApp();
