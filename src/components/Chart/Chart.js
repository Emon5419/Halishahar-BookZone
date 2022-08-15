import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
   {
      name: 'Emon',
      student: 13,
      fees: 10
   },
   {
      name: 'Efty',
      student: 15,
      fees: 12
   },
   {
      name: 'Esha',
      student: 5,
      fees: 10
   },
   {
      name: 'Era',
      student: 10,
      fees: 5
   },
   {
      name: 'yamin#',
      student: 9,
      fees: 4
   },
   {
      name: 'Yasin',
      student: 10,
      fees: 8
   },
];

function App() {
   return (
      <>
         <div className="m-10">
            <h1 className="chart-heading   mt-10">Line Chart</h1>
            <ResponsiveContainer width="50%" aspect={3}>
               <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
                  <Legend />
                  <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
               </LineChart>
            </ResponsiveContainer>

            <h1 className="chart-heading   mt-10">Area Chart</h1>
            <ResponsiveContainer width="50%" aspect={3}>
               <AreaChart
                  width={500}
                  height={300}
                  data={pdata}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
               </AreaChart>
            </ResponsiveContainer>

            <h1 className="chart-heading   mt-10">Bar Chart</h1>
            <ResponsiveContainer width="50%" aspect={3}>
               <BarChart
                  width={500}
                  height={300}
                  data={pdata}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="student" fill="#8884d8" />
                  <Bar dataKey="fees" fill="#82ca9d" />
               </BarChart>
            </ResponsiveContainer>
         </div>

      </>
   );
}

export default App;