import React, { useState, useEffect, MouseEvent, FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IRijksResponse } from './models/IRijksResponse';
import ArtCollection from './components/ArtCollection';
import getCollection from './api';
import './App.css';

const App = () => {
    const [foundTerms, setFoundTerms] = useState<IRijksResponse>({
        count: 0,
        artObjects: [],
    });
    const [inputtedText, setInputText] = useState<string>('');

    // request Rijksmuseum collection on submit or on click
    const handleClick = async (
        event: MouseEvent<SVGElement> | FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        event.preventDefault();

        // grab input to set a new value to query the search request
        setInputText(inputtedText);

        // await for API response to store found data in foundTerms
        const query = encodeURIComponent(inputtedText);
        const response = await getCollection(query);
        setFoundTerms(response);
    };

    // request initial data on page load with an empty query
    useEffect(() => {
        (async () => {
            const response = await getCollection('');
            setFoundTerms(response);
        })();
    }, []);

    return (
        <div className="App">
            <h1>Rijksmuseum Art Collection</h1>
            <form className="searchForm" onSubmit={handleClick}>
                <input
                    placeholder="ex. 'water'"
                    type="text"
                    value={inputtedText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <BsSearch onClick={handleClick} />
            </form>
            <p>We found {foundTerms.count} works for you</p>
            <ArtCollection foundTerms={foundTerms.artObjects} />
        </div>
    );
};

export default App;
