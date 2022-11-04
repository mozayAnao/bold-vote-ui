import React from 'react';
import { DashboardsContainer } from './style';
import Chart from 'chart.js/auto';
import { Pie, Bar } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Number',
        data: [25, 75],
        backgroundColor: ['rgba(77, 166, 255, 0.5)', 'rgba(77, 77, 0, 0.5)'],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

const BarChart = () => {
  const data = {
    labels: ['President', 'Vice President', 'General Secretary', 'PRO'],
    datasets: [
      {
        label: 'Number of Aspirants',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export const Dashboards = () => {
  return (
    <DashboardsContainer>
      <div className="topwrapper">
        <div className="section">Section 1</div>
        <div className="section">
          <PieChart />
        </div>
        <div className="section">
          <BarChart />
        </div>
      </div>
    </DashboardsContainer>
  );
};
