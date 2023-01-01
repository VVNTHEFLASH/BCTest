import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
} from 'chart.js';
import { Bar, Doughnut,Scatter, Pie, PolarArea, Line } from 'react-chartjs-2';
import faker from 'faker';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: `Chart.js Bar Chart`,
    },
  },
};

const labels = ['likelihood', 'intensity', 'relevance', 'impact'];
const backgroundColor1 =  labels.map(() => faker.commerce.color());
const backgroundColor2 =  labels.map(() => faker.commerce.color());
export const data = {
  labels,
  datasets: [
    {
      label: labels,
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500})),
      backgroundColor: backgroundColor1.sort((a,b) => a - b),
    },
  ],
}

export default function ChartAnalytics() {
  // Navigation
  const navigate = useNavigate()
  return(
    <>
    <Button onClick={()=> navigate(-1)}>Go Back</Button>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      <div style={{
        width: 400,
        height: 400      
      }}>
      <PolarArea options={options} data={data}/>
      </div>
      <div style={{
        width: 400,
        height: 400      
      }}>
      <Bar options={options} data={data} width={300} height={100} />
      </div>
          <div style={{
        width: 400,
        height: 400      
      }}>
      <Doughnut options={options} data={data} />
      </div>
      <div style={{
        width: 400,
        height: 400      
      }}>
      <Line options={options} data={data}/>
      </div>
      <div style={{
        width: 400,
        height: 400      
      }}>
      <Scatter options={options} data={data}/>
      </div>
      <div style={{
        width: 400,
        height: 400      
      }}>
      <Pie options={options} data={data}/>
      </div>
    </div> 
    </>
    );
}
