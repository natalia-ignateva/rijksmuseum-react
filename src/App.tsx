import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { IRijksResponse } from './models/IRijksResponse';
import './App.css';
import ArtCollection from './components/ArtCollection';

const App = () => {
    const [foundTerms, setFoundTerms] = useState<IRijksResponse>({
        artObjects: [],
    });
    const [inputText, setImputText] = useState<string>('');

    const getCollection = async (query: string): Promise<IRijksResponse> => {
        const response = await axios.get<IRijksResponse>(
            `https://www.rijksmuseum.nl/api/en/collection/?key=${process.env.REACT_APP_RIJKSMUSEUM_API_KEY}&imgonly=true&q=${query}`,
        );
        return response.data;
    };

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(inputText);
            const response = await getCollection(query);
            setFoundTerms(response);
        })();
    }, [inputText]);

    const submitHandle = (event: FormEvent<HTMLFormElement>): void => {
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
            </form>
            <ArtCollection foundTerms={foundTerms.artObjects} />
        </div>
    );
};

export default App;
