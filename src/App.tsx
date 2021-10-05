import React from 'react';
import Collection from './components/Collection';
import './App.css';

const App = () => (
    <div className="App">
        <h1>Hi</h1>
        <form className="searchForm">
            <input
                id="searchText"
                placeholder="Search for something"
                type="text"
            />
            <button type="button">Search</button>
        </form>
        <Collection />
    </div>
);

export default App;
