import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CollectionsPieceModal.css';

type IDetailedData = {
    artObject: {
        longTitle: string;
        plaqueDescriptionEnglish: string;
        webImage: {
            url: string;
        };
    };
};

const CollectionsPieceModal = (props: { id: string }) => {
    const { id } = props;

    const [foundObject, setFoundObject] = useState<IDetailedData>();

    const getCollection = async (query: string): Promise<IDetailedData> => {
        const response = await axios.get<IDetailedData>(
            `https://www.rijksmuseum.nl/api/en/collection/${query}?key=${process.env.REACT_APP_RIJKSMUSEUM_API_KEY}`,
        );
        return response.data;
    };

    useEffect(() => {
        (async () => {
            const response = await getCollection(id);
            setFoundObject(response);
        })();
    }, []);

    return (
        <div className="collectionModal">
            <div
                className="modal_content"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={undefined}
                role="button"
                tabIndex={0}
            >
                <div className="modal_description">
                    <img
                        src={foundObject?.artObject.webImage.url}
                        alt={foundObject?.artObject.longTitle}
                        width="700"
                    />
                    <p>{foundObject?.artObject.longTitle}</p>
                    <p>{foundObject?.artObject.plaqueDescriptionEnglish}</p>
                </div>
            </div>
        </div>
    );
};

export default CollectionsPieceModal;
