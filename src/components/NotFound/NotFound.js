import React from 'react';
import './NotFound.css';
const NotFound = () => {
   return (
      <div className='not-found'>
         <h1 className='text-red-500 text-center mt-36 font-bold text-9xl'>Oops</h1>
         <h1 className='text-center font-bold text-9xl'>404</h1>
         <h2 className='text-center font-bold text-3xl'>Not Found</h2>
         <h2 className='mt-10 text-black text-center font-bold text-2xl'>Back TO Home Page</h2>
      </div>
   );
};

export default NotFound;