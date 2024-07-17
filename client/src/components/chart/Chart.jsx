import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "./chart.css";

export function Chart() {
  const [data, setData] = useState([
    { name: "LOW", value: 0 },
    { name: "MEDIUM", value: 0 },
    { name: "HIGH", value: 0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks") // Replace with your MongoDB API endpoint
      .then((response) => response.json())
      .then((todos) => {
        const updatedData = [
          { name: "LOW", value: 0 },
          { name: "MEDIUM", value: 0 },
          { name: "HIGH", value: 0 },
        ];
        
        todos.forEach((todo) => {
          if (todo.priority) {
            updatedData.find(item => item.name === todo.priority).value++;
          }
        });

        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const COLORS = ['#4CAF50', '#FFC107', '#F44336']; // Customize colors

  return (
    <div className='chart-container'>
      <div className='chart-titlediv'>
        <div className='chart-title'>Tasks Priorities</div>
        <div className='chart-divider'></div> 
        <PieChart width={245} height={245}>
          <Tooltip />
          <Legend />
          <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            innerRadius={60} 
            outerRadius={80} 
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>    
      </div>
    </div>
  );
}

export default Chart;
