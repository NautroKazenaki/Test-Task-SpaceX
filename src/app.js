import React from 'react';
import ReactDOM from 'react-dom/client';
import SpaceXMissions from './SpaceXMissions/SpaceXMissions.jsx';
import AppStyles from './app.module.css'
import { Provider } from 'react-redux';
import { store } from './Redux/store.js'
const App = () => {
    return (
        <Provider store={store}>
            <div className={AppStyles.appContainer}>
                <SpaceXMissions />
            </div>
        </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);



// ReactDOM.render(<App />, document.getElementById('root'));