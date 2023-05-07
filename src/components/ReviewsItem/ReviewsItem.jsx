

import { Button } from '../Button';

export const ReviewsItem = ( { review } ) => {
    const { id, user, comment } = review;

    return (
        <div className="review-container">
            <div className="review-container">
                <div className="review-comment__container">
                    <p className="comment">&quot;{comment}&quot;</p>
                </div>
                <h4 className="mt-1">{user}</h4>
            </div>
        </div>
    );
};

