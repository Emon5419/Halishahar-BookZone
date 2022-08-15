import React from 'react';
import useCharts from '../../hooks/useCharts';
import Chart from '../Chart/Chart';

const Dashboard = () => {
   const [chart] = useCharts();
   console.log(chart);

   return (
      <div>
         <Chart></Chart>
      </div>

   );
};

export default Dashboard;