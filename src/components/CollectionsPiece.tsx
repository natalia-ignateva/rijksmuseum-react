import React, { MouseEvent, useState } from 'react';
import { IArtObject } from '../models/IArtObject';
import CollectionsPieceModal from './CollectionsPieceModal';

const CollectionsPiece = (props: { artObject: IArtObject }) => {
    const { artObject } = props;

    const [isDisplayedModal, setIsDisplayedModal] = useState(false);
    const [key, setKey] = useState('');

    const handleModal = (event: MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        setKey(artObject.objectNumber);
        setIsDisplayedModal(!isDisplayedModal);
    };

    return (
        <div
            key={artObject.objectNumber}
            onClick={handleModal}
            onKeyDown={undefined}
            role="button"
            tabIndex={0}
        >
            <div>
                <img
                    src={artObject.webImage.url}
                    alt={artObject.title}
                    width="500"
                />
                <p>{`${artObject.title}: ${artObject.principalOrFirstMaker}`}</p>
                {isDisplayedModal ? <CollectionsPieceModal id={key} /> : null}
            </div>
        </div>
    );
};

export default CollectionsPiece;
