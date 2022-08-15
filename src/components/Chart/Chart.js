import React from 'react';
import one from '../../images/1.jpg';
import './Chart.css';

const Chart = () => {
   return (
      <div className='m-30 grid grid-cols-3'>
         <div className='flex justify-items-center items-center'>

            <img className="books" src={one} alt="" />
            <div className='ml-10'>
               <h5>Sapiens</h5>
            </div>
         </div>

      </div>
   );
};

export default Chart;