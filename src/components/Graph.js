import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Graph = ({ investedAmount, estimatedReturns }) => {
  const data = [
    { name: 'Invested Amount', value: investedAmount },
    { name: 'Estimated Returns', value: parseFloat(estimatedReturns) }
  ];

  const COLORS = ['#fb8600', 'green'];

  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
