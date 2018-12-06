import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on Me!';
}

const App = () => {
    // const buttonName='Click Me!';

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input name="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {/* {buttonName} */}
                {getButtonText()}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);