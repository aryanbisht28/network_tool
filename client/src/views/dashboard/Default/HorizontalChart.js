import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import ReactEcharts from 'echarts-for-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function HorizontalChart() {
    const options = {
        responsive: true,
        tension: 0.5,
        pointStrokeColor: '#ffc8dd',
        pointColor: '#ffc8dd',
        strokeColor: '#ffc8dd',
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
            legend: {
                display: false,
                position: 'top',
                labels: {
                    color: '#000000',
                    font: {
                        size: 8
                    },
                    align: 'center',
                    padding: 5,
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

    const data = {
        labels: ['UP East', 'UP West', 'Goa', 'HP', 'Delhi'],
        datasets: [
            {
                data: [93, 92.3, 92, 91.7, 91.5],
                backgroundColor: '#8884d8',
                borderColor: '#8884d8'
            }

            // {
            //     label: 'Core(PS)',
            //     data: [98, 99, 98, 97, 98, 99],
            //     backgroundColor: '#ffc8dd',
            //     borderColor: '#ffc8dd'
            // }
        ]
    };
    let Kpi = {
        width: '65%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '1rem',
        height: '5vh',
        marginLeft: '1rem'
        // color: '#201F1F'
    };

    return (
        <Card
            style={{
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
                Top Performing Regions
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
            <Bar options={options} data={data} />
            <div className="container" style={{ height: '40vh', width: '100%', overflowY: 'scroll', marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>UP West</h5>
                    </div>
                    <div style={{ width: '35%' }}>
                        <h5>93%</h5>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#cdcdcd',
                        marginBottom: '10px'
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>UP East</h5>
                    </div>
                    <div style={{ width: '35%' }}>
                        <h5>92.4%</h5>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#cdcdcd',
                        marginBottom: '10px'
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Goa</h5>
                    </div>
                    <div style={{ width: '35%' }}>
                        <h5>92%</h5>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#cdcdcd',
                        marginBottom: '10px'
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Himachal Pradesh</h5>
                    </div>
                    <div style={{ width: '35%' }}>
                        <h5>91.7%</h5>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#cdcdcd',
                        marginBottom: '10px'
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Delhi</h5>
                    </div>
                    <div style={{ width: '35%' }}>
                        <h5>91.5%</h5>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#cdcdcd',
                        marginBottom: '10px'
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Uttrakhand</h5>
                    </div>
                    <div style={{ width: '35%' }}>
                        <h5>91%</h5>
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#cdcdcd',
                        marginBottom: '10px'
                    }}
                />
            </div>
        </Card>
    );
}

export default HorizontalChart;
