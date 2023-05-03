import { useEffect, useState } from 'react';
import EarningCard from './EarningCard';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import PieChart from './PieChart';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import RanCard from './cards/RanCard';
import CoreCard from './cards/CoreCard';
import TransCard from './cards/TransCard';
import BarChart from '../BarChart';
import GaugeChart from './GaugeChart';
import './Scroll.css';
import TopKpi from './TopKpi';
import HorizontalChart from './HorizontalChart';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Site from './data-card/Site';
import Incident from './data-card/Incident';
import Ticket from './data-card/Ticket';
import Breached from './data-card/Breached.';
import Header from 'layout/MainLayout/Header';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        }
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [98, 90, 94, 90, 96, 98],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
        ]
    };
    return (
        <>
            <Grid container spacing={gridSpacing} xs={12} style={{ marginTop: '-6rem' }}>
                <div style={{ marginBottom: '1rem', width: '100%', marginTop: '1rem' }}>
                    <Header title={'Dasboard'} subtitle={''} />
                </div>
                <Grid container spacing={gridSpacing} xs={12} style={{ marginLeft: '1rem' }}>
                    <Grid item xs={2.4}>
                        <Site />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Incident />
                    </Grid>
                    <Grid item xs={2.4}>
                        <EarningCard />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Breached />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Ticket />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing} xs={12} style={{ marginLeft: '1rem' }}>
                    <Grid item xs={3.5} style={{ marginTop: '1rem' }}>
                        <Card style={{ background: '#fff', height: '69vh' }}>
                            <BarChart />
                            <TopKpi />
                        </Card>
                    </Grid>
                    <Grid item xs={5.5} style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <GaugeChart />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <RanCard />
                                </div>
                                <div style={{ marginTop: '0.5rem', marginLeft: '0.7rem' }}>
                                    <CoreCard />
                                </div>
                                <div style={{ marginTop: '0.5rem', marginLeft: '0.7rem' }}>
                                    <TransCard />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: '1rem' }}>
                        <Card style={{ background: '#fff', height: '69vh' }}>
                            <HorizontalChart />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
