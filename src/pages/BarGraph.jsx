import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import "../styles/BarGraph.css";

Chart.register(...registerables);

function BarChart() {
  const data = {
    labels: ['Created', 'Approved'],
    datasets: [
      {
        label: 'Count',
        data: [10, 15],
        backgroundColor: ['red', 'green'],
        barThickness: 30,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Disable tooltip
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <>
    <h2>No of Estimation</h2>
    <div className="chart-container">
      
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
    </>
    
  );
}

export default BarChart;
