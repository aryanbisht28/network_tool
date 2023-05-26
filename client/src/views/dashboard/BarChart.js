import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import ReactEcharts from 'echarts-for-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function BarChart() {
    const options = {
        responsive: true,
        tension: 0.5,
        pointStrokeColor: '#ffc8dd',
        pointColor: '#ffc8dd',
        strokeColor: '#ffc8dd',
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            datalabels: {
                display: false
            },
            legend: {
                position: 'top',
                labels: {
                    color: '#000000',
                    font: {
                        size: 10
                    },
                    align: 'center',
                    usePointStyle: true,
                    boxWidth: 6
                }
            }

            // title: {
            //     display: true,
            //     text: 'Monthly Network Performance'
            // }
        }
    };

    //   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    // const options = {
    //     responsive: true,
    //     // maintainAspectRatio: false,
    //     barThickness: 18, // Set the width of each bar in pixels
    //     maxBarThickness: 40, // Set the maximum width of each bar in pixels
    //     borderWidth: 1,
    //     borderRadius: 20, // This will round the corners
    //     // borderSkipped: false,

    //     scales: {
    //         x: {
    //             stacked: false,
    //             grid: {
    //                 display: false
    //             }
    //         },
    //         y: {
    //             beginAtZero: true,
    //             stacked: false,
    //             grid: {
    //                 display: false
    //             }
    //         }
    //     },
    //     plugins: {
    // datalabels: {
    //     display: false
    // },
    //         legend: {
    //             labels: {
    //                 color: '#000000',
    //                 font: {
    //                     size: 10
    //                 },
    //                 align: 'center',
    //                 padding: 5,
    //                 usePointStyle: true,
    //                 boxWidth: 6
    //             }
    //         }
    //     }
    // };
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'RAN',
                data: [98.25, 98.99, 99, 99.11, 99.23, 99.67],
                backgroundColor: '#82ca9d',
                borderColor: '#82ca9d'
            }
            // {
            //     label: 'Transmission',
            //     data: [97, 90, 98, 96, 98, 99],
            //     backgroundColor: '#8884d8',
            //     borderColor: '#8884d8'
            // },
            // {
            //     label: 'Core',
            //     data: [99, 97, 98, 99, 99, 99],
            //     backgroundColor: '#480ca8',
            //     borderColor: '#480ca8'
            // }
            // {
            //     label: 'Core(PS)',
            //     data: [98, 99, 98, 97, 98, 99],
            //     backgroundColor: '#ffc8dd',
            //     borderColor: '#ffc8dd'
            // }
        ]
    };

    return (
        <Card
            style={{
                height: '44.5vh',
                position: 'relative',
                marginBottom: '1%',
                padding: '1%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffff'
                // justifyContent: 'center',
                // alignItems: 'center'
            }}
        >
            <h3 style={{ textAlign: 'left', fontSize: '1rem', color: '#044590', margin: '1rem 1rem 0 1rem', padding: '0' }}>
                Monthly Network Performance
            </h3>
            <div
                style={{
                    width: '95%',
                    height: '1.5px',
                    backgroundColor: '#6898ce',
                    marginTop: '10px',
                    marginBottom: '10px',
                    marginLeft: '0.5rem'
                }}
            />
            <Bar options={options} data={data} type="horizontalBar" />
        </Card>
    );
}

export default BarChart;
