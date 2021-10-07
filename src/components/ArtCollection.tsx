import React, { ReactElement, useState, MouseEvent } from 'react';
import { IArtObject } from '../models/IArtObject';
import CollectionDetailsModal from './CollectionDetailsModal';

const ArtCollection = (props: { foundTerms: IArtObject[] }): ReactElement => {
    const { foundTerms } = props;
    const [isDisplayedModal, setIsDisplayedModal] = useState(false);

    const handleModal = (event: MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        setIsDisplayedModal(!isDisplayedModal);
    };

    return (
        <div>
            {foundTerms.map(
                (artObject: IArtObject): ReactElement => (
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
                            {isDisplayedModal ? (
                                <CollectionDetailsModal />
                            ) : null}
                        </div>
                    </div>
                ),
            )}
        </div>
    );
};

export default ArtCollection;
