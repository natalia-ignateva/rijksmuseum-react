import React, { ReactElement } from 'react';
import { IArtObject } from '../models/IArtObject';

const ArtCollection = (props: { foundTerms: IArtObject[] }): ReactElement => {
    const { foundTerms } = props;
    return (
        <div>
            {foundTerms.map(
                (artObject: IArtObject): ReactElement => (
                    <div key={artObject.id}>
                        <div>
                            <img
                                src={artObject.webImage.url}
                                alt={artObject.title}
                                width="500"
                            />
                            <p>{`${artObject.title}: ${artObject.principalOrFirstMaker}`}</p>
                        </div>
                    </div>
                ),
            )}
        </div>
    );
};

export default ArtCollection;
