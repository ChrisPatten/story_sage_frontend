import React from 'react';

const assetUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const BookCover = ({ book }) => {
    const coverUrl = assetUrl + '/images/' + book.coverImage;
    const imgStyle = {
        width: '100%',
        objectFit: 'contain'
    };
    return (
        <div>
            <img 
                src={coverUrl} 
                alt={book.title} 
                style={imgStyle} 
            />
        </div>
    );
}

export default BookCover;