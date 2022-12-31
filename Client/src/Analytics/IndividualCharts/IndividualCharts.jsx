import { Grid } from '@material-ui/core'
import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Bar, Doughnut, Scatter, Pie, PolarArea, Line } from 'react-chartjs-2';
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
import { incomeCategories } from '../../../constants/constants';
import faker from 'faker';

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





const IndividualCharts = () => {
  // Navigation
  const navigate = useNavigate()
  // params from url
  const params = useParams()
  // get props from navigation
  const {state} = useLocation();
  const { data } = state; // Read values passed on state
  console.log(data, params.id)

  // Chart Options
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${data.title} Bar Chart`,
      },
    },
  };
  // doughnut options
  const optionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${data.title} Doughnut Chart`,
      },
    },
  };
  // line options
    // doughnut options
    const optionsLine = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `${data.title} Line Chart`,
        },
      },
    };

  const labelsBar = ["Likelihood", "Impact", "Relevance", "Intensity"]
  const BarData = {
    datasets: [
      {
        data: [ data.likelihood, data.impact, data.relevance, data.intensity ],
        backgroundColor: labelsBar.map(() => faker.commerce.color()) ,
        label: data.pestle
      }
    ],
    labels: labelsBar,
  }

  const labelsDoughnut = ["Likelihood", "Impact", "Relevance", "Intensity"];
  const DoughnutData = {
    datasets: [
      {
        data: [ data.likelihood, data.impact, data.relevance, data.intensity ],
        backgroundColor: labelsDoughnut.map(() => faker.vehicle.color()) ,
        label: data.topic
      }
    ],
    labels: labelsDoughnut,
  }
  return (
    <Grid style={{
      backgroundColor: 'palegreen'
    }}>
      <Button onClick={() => navigate(-1) }>
        <Typography>Go Back</Typography>
      </Button>
      <Grid style={{ display: 'flex' }}>
        <Grid xs={4} sm={4} style={{ margin: 12, padding: 12}}>
          <Card style={{ margin: 12, padding: 12}}>
            <Doughnut data={DoughnutData} options={optionsDoughnut} />
          </Card>
        </Grid>
        <Grid xs={4} sm={6} style={{ margin: 12, padding: 12}}>
          <Card style={{ margin: 12, padding: 12}}>
            <Bar data={BarData} options={optionsBar} />
          </Card>
        </Grid>
      </Grid>
      <Grid>
        <Grid xs={4} sm={6} style={{ margin: 12, padding: 12}}>
          <Card style={{ margin: 12, padding: 12}}>
            <Line data={BarData} options={optionsLine} />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default IndividualCharts