import React from 'react';
import { PieChart, Pie} from 'recharts';
  
  
const StudentChart = () => {
  
// Sample data
const data = [
  {name: 'Communiction', Scores: 400},
  {name: 'Problem Solving', Scores: 700},
  {name: 'System Design', Scores: 200},
  {name: 'DataBase', Scores: 1000}
];
  
  
return (
        <PieChart width={400} height={300} >
          <Pie data={data} dataKey="Scores" outerRadius={100} fill="green" />
        </PieChart>
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}
  
export default StudentChart;