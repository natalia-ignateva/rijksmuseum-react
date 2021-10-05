import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ArtObject {
    id: string;
    title: string;
    principalOrFirstMaker: string;
}

interface RijksResponse {
    artObjects: ArtObject[];
}

const Collection = () => {
    const [searchTerms, setSearchTerms] = useState<RijksResponse>({
        artObjects: [],
    });

    const collectionFound = async (): Promise<void> => {
        const response = await axios.get<RijksResponse>(
            `https://www.rijksmuseum.nl/api/en/collection/?key=${process.env.REACT_APP_RIJKSMUSEUM_API_KEY}&q=red`,
        );
        setSearchTerms(response.data);
    };

    useEffect(() => {
        collectionFound();
    }, [searchTerms]);

    return (
        <div>
            {searchTerms.artObjects.map((artObject) => (
                <div key={artObject.id}>
                    <p>
                        {artObject.title}: {artObject.principalOrFirstMaker}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Collection;
