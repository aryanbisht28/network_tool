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
import { Carousel } from 'react-responsive-carousel';
import RanCard from './cards/RanCard';
import CoreCard from './cards/CoreCard';
import TransCard from './cards/TransCard';
import BarChart from '../BarChart';
import CorepsCard from './cards/CorepsCard';
import GaugeChart from './GaugeChart';
import Cards from './cards/index';
import './Scroll.css';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    return (
        <Grid container spacing={gridSpacing} xs={12} direction="column">
            <Grid container spacing={gridSpacing} xs={12} style={{ margin: '1rem', marginTop: '-0.7rem' }}>
                <Grid xs={6} item style={{ marginLeft: '-0.6rem' }}>
                    <GaugeChart />
                </Grid>
                <Grid xs={6} item>
                    <BarChart />
                </Grid>
            </Grid>
            <Grid container spacing={gridSpacing} xs={12} style={{ margin: '1rem', marginTop: '-1.5rem' }}>
                <Grid xs={4} item style={{ marginLeft: '-0.6rem' }}>
                    <Card
                        style={{
                            height: '23vh',
                            position: 'relative',
                            marginBottom: '1%',
                            padding: '1%',
                            display: 'flex',
                            flexDirection: 'column'
                            // justifyContent: 'center',
                            // alignItems: 'center'
                        }}
                    >
                        <h5 style={{ textAlign: 'left', fontSize: '1rem', color: '#044590', marginLeft: '1rem', marginTop: '10px' }}>
                            Top Performing Circle/Regions
                        </h5>
                        <div
                            style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#6898ce',
                                marginTop: '-10px',
                                marginBottom: '10px'
                            }}
                        />
                        <div className="container" style={{ height: '40vh', width: '100%', overflowY: 'scroll' }}>
                            <div style={Kpi}>
                                <h5>UP West</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>UP East</h5>
                            </div>

                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Tamil Nadu</h5>
                            </div>

                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Gurgaon</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Delhi</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Himachal Pradesh</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                        </div>
                    </Card>
                </Grid>
                <Grid xs={8} item>
                    <Card
                        style={{
                            height: '23vh',
                            position: 'relative',
                            marginBottom: '1%',
                            padding: '1%',
                            display: 'flex',
                            flexDirection: 'column'
                            // justifyContent: 'center',
                            // alignItems: 'center'
                        }}
                    >
                        <h5 style={{ textAlign: 'left', fontSize: '1rem', color: '#044590', marginLeft: '1rem', marginTop: '10px' }}>
                            Top Performing KPI's
                        </h5>
                        <div
                            style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#6898ce',
                                marginTop: '-10px',
                                marginBottom: '10px'
                            }}
                        />
                        <div className="container" style={{ height: '40vh', width: '100%', overflowY: 'scroll' }}>
                            <div style={Kpi}>
                                <h5>Radio resource control setup success rate</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Attach success rate</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>RAN Connection Setup Success Rate</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Tracking Area Update Success Rate</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Packet Retransmission Rate</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Network Uptime</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Mean Time Between Failures</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>PS Data Session Success Rate</h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                            <div style={Kpi}>
                                <h5>Service Accessibility </h5>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#cdcdcd',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <Grid style={{ margin: '1rem', marginTop: '-0.7rem' }}>
                <Cards />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
