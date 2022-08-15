import React from 'react';
import useReviews from '../../hooks/useReviews';
import Header from '../Header/Header';
import './Review.css';


const Review = () => {
   const [reviews] = useReviews();

   return (
      <div className='name'>
         <Header></Header>

         <div className='grid grid-cols-3 m-10'>
            {
               reviews.map(review =>
                  <div className='review-page text-black '>
                     <h1>Name : {review.name}</h1>
                     <h1>Rating : {review.rating}</h1>
                     <h1>Review : {review.review}</h1>

                  </div>
               )
            }
         </div>
      </div>

   );
};

export default Review;