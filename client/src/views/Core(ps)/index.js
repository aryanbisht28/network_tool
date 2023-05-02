import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import PieCharts from 'views/Core(ps)/PieChart';
import GaugeChart from 'views/Core(ps)/GaugeChart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Medium from './Table/Medium';
import Normal from './Table/Normal';
import Critical from './Table/Critical';
import All from './Table/All';
import './Table/Style/Scroll.css';

function Index() {
    const [kpi, setKpi] = useState('all');

    const handleChange = (event) => {
        setKpi(event.target.value);
    };
    return (
        <Grid container xs={12}>
            <Grid item xs={4}>
                {/* <Grid item>
                    <GaugeChart />
                </Grid>
                <Grid item style={{ marginTop: '1rem' }}>
                    <PieCharts />
                </Grid> */}
                <Card>
                    <GaugeChart />
                    <PieCharts />
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card style={{ marginLeft: '1rem', height: '77.5vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0.5rem' }}>
                        <div style={{ width: '80%' }}>
                            <h2 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>List of Core(PS) KPI's</h2>
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
                    <div>
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
                            {kpi == 'average' ? <Medium /> : kpi == 'normal' ? <Normal /> : kpi == 'critical' ? <Critical /> : <All />}
                        </div>
                    </div>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Index;
