import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import Card from '@mui/material/Card';
import PieCharts from 'views/RAN/PieChart';
import GaugeChart from 'views/RAN/GaugeChart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Medium from './Table/Medium';
import Normal from './Table/Normal';
import Critical from './Table/Critical';
import All from './Table/All';
import Nsi from './non_service_impacting/Nsi.js';
import Service from './Sevice';
import './Table/Style/Scroll.css';
import Site from './data-card/Site';
import Incident from './data-card/Incident';
import Ticket from './data-card/Ticket';
import Breached from './data-card/Breached.';
import Header from 'layout/MainLayout/Header';
import Assign from './data-card/Assign';
import BarChart from './BarChart';
function Index() {
    const [kpi, setKpi] = useState('all');

    const handleChange = (event) => {
        setKpi(event.target.value);
    };
    return (
        <>
            <div style={{ marginBottom: '1rem', width: '100%', marginTop: '-90px' }}>
                <Header title={'RAN'} subtitle={''} />
            </div>
            <Grid container xs={12} style={{ marginTop: '-0.5rem' }}>
                <Grid container spacing={gridSpacing} xs={12}>
                    <Grid item xs={2.4}>
                        <Site />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Incident />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Assign />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Breached />
                    </Grid>
                    <Grid item xs={2.4}>
                        <Ticket />
                    </Grid>
                </Grid>
                {/* <Grid item xs={4}>
                    <Card style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                        <GaugeChart />
                        <PieCharts />
                    </Card>
                </Grid> */}
                {/* <Grid item xs={8}>
                    <Card style={{ marginLeft: '1rem', height: '77.5vh' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0.5rem' }}>
                            <div style={{ width: '80%' }}>
                                <h2 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>List of RAN KPI's</h2>
                            </div>
                            <div style={{ width: '20%' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={kpi}
                                        label="kpi list"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'all'}>All</MenuItem>
                                        <MenuItem value={'critical'}>Critical</MenuItem>
                                        <MenuItem value={'average'}>Average</MenuItem>
                                        <MenuItem value={'normal'}>Normal</MenuItem>
                                    </Select>
                                </FormControl>
                                
                            </div>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                height: '1.5px',
                                backgroundColor: '#6898ce',
                                marginLeft: '10px',
                                marginRight: '10px'
                            }}
                        />
                        <div className="container" style={{ overflowY: 'scroll', height: '25vh', margin: '1rem' }}>
                            {kpi == 'average' ? <Medium /> : kpi == 'normal' ? <Normal /> : kpi == 'critical' ? <Critical /> : <All />}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0.5rem' }}>
                            <div style={{ width: '80%' }}>
                                <h2 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>Impacting KPI's</h2>
                            </div>
                            <div style={{ width: '20%' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={kpi}
                                        label="kpi list"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'all'}>All</MenuItem>
                                        <MenuItem value={'Service Impacting'}>Service Impacting</MenuItem>
                                        <MenuItem value={'Non-Service Impacting'}>Non-Service Impacting</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                height: '1.5px',
                                backgroundColor: '#6898ce',
                                marginLeft: '10px',
                                marginRight: '10px'
                            }}
                        />
                        <div className="container" style={{ overflowY: 'scroll', height: '25vh', margin: '1rem' }}>
                            {kpi == 'Service Impacting' ? <Nsi /> : kpi == 'Non-Service Impacting' ? <Service /> : <All />}
                        </div>
                    </Card>
                </Grid> */}
                {/* <Grid container spacing={gridSpacing} xs={12}>
                    <Grid /> */}
                <Grid container spacing={gridSpacing} xs={12} style={{ marginTop: '-1rem' }}>
                    <Grid item xs={3.5}>
                        <Card style={{ background: '#fff', height: '74vh' }}>
                            <GaugeChart />
                            <PieCharts />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <Card style={{ background: '#fff' }}>
                                    <BarChart />
                                </Card>
                            </div>
                            <div style={{ marginTop: '0.5rem', width: '100%' }}>
                                <Card style={{ background: '#fff' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0.5rem' }}>
                                        <div style={{ width: '80%' }}>
                                            <h2 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>Impacting KPI's</h2>
                                        </div>
                                        <div style={{ width: '20%' }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={kpi}
                                                    label="kpi list"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={'all'}>All</MenuItem>
                                                    <MenuItem value={'Service Impacting'}>Service Impacting</MenuItem>
                                                    <MenuItem value={'Non-Service Impacting'}>Non-Service Impacting</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '1.5px',
                                            backgroundColor: '#6898ce',
                                            marginLeft: '10px',
                                            marginRight: '10px'
                                        }}
                                    />
                                    <div className="container" style={{ overflowY: 'scroll', height: '23.5vh', margin: '1rem' }}>
                                        {kpi == 'Service Impacting' ? <Nsi /> : kpi == 'Non-Service Impacting' ? <Service /> : <All />}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4.5}>
                        <div style={{ width: '100%' }}>
                            <Card style={{ backgroundColor: '#fff' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0.5rem' }}>
                                    <div style={{ width: '80%' }}>
                                        <h2 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>List of RAN KPI's</h2>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={kpi}
                                                label="kpi list"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={'all'}>All</MenuItem>
                                                <MenuItem value={'critical'}>Critical</MenuItem>
                                                <MenuItem value={'average'}>Average</MenuItem>
                                                <MenuItem value={'normal'}>Normal</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '1.5px',
                                        backgroundColor: '#6898ce',
                                        marginLeft: '10px',
                                        marginRight: '10px'
                                    }}
                                />
                                <div className="container" style={{ overflowY: 'scroll', height: '58vh', margin: '1rem' }}>
                                    {kpi == 'average' ? (
                                        <Medium />
                                    ) : kpi == 'normal' ? (
                                        <Normal />
                                    ) : kpi == 'critical' ? (
                                        <Critical />
                                    ) : (
                                        <All />
                                    )}
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Index;
