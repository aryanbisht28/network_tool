import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import ReactEcharts from 'echarts-for-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'KPI Performance'
            }
        }
    };

    //   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'KPI Performance',
                data: [1000, 1500, 2000, 1800, 2400, 2200],
                borderColor: '#8884d8'
            }
        ]
    };

    return (
        <Card
            style={{
                height: '40vh',
                position: 'relative',
                marginBottom: '1%',
                padding: '1%',
                display: 'flex',
                flexDirection: 'coloumn',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Line options={options} data={data} />
        </Card>
    );
}

export default LineChart;
