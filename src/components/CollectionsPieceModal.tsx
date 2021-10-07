import React from 'react';
import './CollectionsPieceModal.css';

const CollectionsPieceModal = () => (
    <div className="collectionModal">
        <div
            className="modal_content"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={undefined}
            role="button"
            tabIndex={0}
        >
            <h2>Tile</h2>
            <div className="modal_description">
                <p>safd</p>
            </div>
        </div>
    </div>
);

export default CollectionsPieceModal;
