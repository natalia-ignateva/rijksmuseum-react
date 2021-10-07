import React from 'react';
import './CollectionDetailsModal.css';

const CollectionDetailsModal = () => (
    <div className="collectionModal">
        <div
            className="modal_content"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={undefined}
            role="button"
            tabIndex={0}
        >
            <h2>Title</h2>
            <div className="modal_description">
                <p>description</p>
                <p>something else</p>
                <p>image</p>
            </div>
        </div>
    </div>
);

export default CollectionDetailsModal;
