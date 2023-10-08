import React, { useEffect, useState } from "react";
import { Chart as GoogleChart } from "react-google-charts"; 
import "./chart.css";


export const options = {
  is3D: false,
  pieHole: 0.4,
};

export function PieChart() {
  const [data, setData] = useState([
    ["Priority", "Count"],
    ["LOW", 0],
    ["MEDIUM", 0],
    ["HIGH", 0],
  ]);
  useEffect(() => {
    fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => response.json())
      .then((todos) => {
        todos.forEach((todo) => {
          switch (todo.priority) {
            case "LOW":
              data[1][1]++;
              break;
            case "MEDIUM":
              data[2][1]++;
              break;
            case "HIGH":
              data[3][1]++;
              break;
            default:
              break;
          }
        });
        setData([...data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='chart-container'>
        <div className='chart-titlediv'>
            <div className='chart-title'>Tasks Priorities</div>
            <div className='chart-divider'></div> 
              <GoogleChart className="gChart"
                    chartType="PieChart"
                    width="245px"
                    height="245px"
                    data={data}
                    options={options}
                  />    
        </div>
    </div>
  )
}

export default PieChart;
