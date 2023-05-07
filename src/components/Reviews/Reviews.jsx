

import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

export const Reviews = ( { global } ) => {
    const reviews = Array.isArray( global.reviews ) ? global.reviews : [];
    return (
        <div className="reviews-container">
            {
                reviews.map( ( review, index ) => (
                    <ReviewsItem key={index} review={{ id: index, ...review }} />
                ) )
            }
        </div>
    );
};
