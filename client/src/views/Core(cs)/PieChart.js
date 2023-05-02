import React from 'react';
// import { PieChart } from 'react-minimal-pie-chart';
import Card from '@mui/material/Card';
import { Pie } from 'react-chartjs-2';

function PieCharts() {
    const data = {
        labels: ['North', 'South', 'East', 'West'],
        datasets: [
            {
                data: [12, 3, 5, 14],
                backgroundColor: ['#FF6384', '#FFCE56', '#2ecc71', 'red']
            }
        ]
    };
    const options = {
        // plugins: {
        //     title: {
        //         display: true,
        //         text: 'KPI Pie Chart'
        //     }
        // },
        responsive: true
    };
    return (
        <Card
            style={{
                height: '42.5vh',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '-1.5rem' }}>
                <h3 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>Core(CS) Utilization</h3>
                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#6898ce',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}
                />
            </div>
            <div
                style={{
                    height: '30vh',
                    position: 'relative',
                    marginBottom: '1%',
                    padding: '1%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Pie data={data} options={options} />
            </div>
        </Card>
    );
}

export default PieCharts;
