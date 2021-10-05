import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { IRijksResponse } from './IRijksResponse';
import './App.css';

const App = () => {
    const [foundTerms, setFoundTerms] = useState<IRijksResponse>({
        artObjects: [],
    });
    const [inputText, setImputText] = useState<string>('');

    const foundCollection = async (query: string): Promise<IRijksResponse> => {
        const response = await axios.get<IRijksResponse>(
            `https://www.rijksmuseum.nl/api/en/collection/?key=${process.env.REACT_APP_RIJKSMUSEUM_API_KEY}&q=${query}`,
        );
        return response.data;
    };

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(inputText);
            const response = await foundCollection(query);
            setFoundTerms(response);
        })();
    }, [inputText]);

    const submitHandle = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        setImputText(input.value);
        input.value = '';
    };

    return (
        <div className="App">
            <h1>Rijksmuseum</h1>
            <form className="searchForm" onSubmit={submitHandle}>
                <input
                    id="searchText"
                    placeholder="What is in your mind?"
                    type="text"
                    onChange={(event) => setImputText(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {foundTerms.artObjects.map((artObject) => (
                    <div key={artObject.id}>
                        <p>{`${artObject.title}: ${artObject.principalOrFirstMaker}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
