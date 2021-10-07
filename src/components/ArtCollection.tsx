import React, { ReactElement } from 'react';
import { IArtObject } from '../models/IArtObject';
import CollectionsPiece from './CollectionsPiece';

const ArtCollection = (props: { foundTerms: IArtObject[] }): ReactElement => {
    const { foundTerms } = props;

    return (
        <div>
            {foundTerms.map(
                (artObject: IArtObject): ReactElement => (
                    <CollectionsPiece artObject={artObject} />
                ),
            )}
        </div>
    );
};

export default ArtCollection;
