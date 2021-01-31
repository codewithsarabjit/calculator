import React from 'react';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import '../../App.css';

const Homepage = () => {
    return (
        <header className="App-header">
            <Logo className='App-logo' />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to='/calculator' className="App-link">
                Open Calculator
            </Link>
        </header>
    )
}

export default Homepage;