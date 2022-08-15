import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Review.css';


const Review = () => {
   const [reviews] = useReviews();

   return (
      <div className='review grid grid-cols-3 m-10'>
         {
            reviews.map(review =>
               <div className='review-page bg-gray-400 text-white text-center'>
                  <h1>Review : {review.review}</h1>
                  <h1>Rating : {review.rating}</h1>
                  <h1>Name : {review.name}</h1>
               </div>
            )
         }
      </div>
   );
};

export default Review;