import React from 'react';
import './Reviews.css';

const Reviews = (props) => {
   const { name, review, rating } = props.review;

   return (
      <div className='review font-bold'>
         <h1>Name: {name}</h1>
         <h1>Rating : {rating}</h1>
         <h1>Review : {review}</h1>


      </div>
   );
};

export default Reviews;