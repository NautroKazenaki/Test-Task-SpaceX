import React from 'react';
import ReactDOM from 'react-dom/client';
import SpaceXMissions from './SpaceXMissions/SpaceXMissions.jsx';

const App = () => {
    return (
        <div>
            <SpaceXMissions />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);



// ReactDOM.render(<App />, document.getElementById('root'));