import React from 'react';
import GaugeChart from 'react-gauge-chart';
import Card from '@mui/material/Card';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Grid, Typography } from '@mui/material';

function GaugesChart() {
    const value = 0.97;
    return (
        <Card
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItem: 'center',
                justifyContent: 'center',
                height: '35vh',
                background: '#fff'
            }}
        >
            <Grid style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '-1.5rem' }}>
                <h3 style={{ textAlign: 'left', fontSize: '1.2rem', color: '#044590' }}>Transmission Performance</h3>
                <div
                    style={{
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: '#6898ce',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}
                />
            </Grid>
            <Grid container direction="column" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid style={{ width: 120, height: 120 }}>
                    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                </Grid>
            </Grid>
        </Card>
    );
}

export default GaugesChart;
