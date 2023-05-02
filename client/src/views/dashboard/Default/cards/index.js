import React from 'react';
import Card from '@mui/material/Card';
import { gridSpacing } from 'store/constant';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function index() {
    const value = 0.92;
    const value1 = 0.93;
    const value2 = 0.98;
    const value3 = 0.98;
    return (
        <Card style={{ margin: '1rem' }}>
            <Grid container spacing={gridSpacing} xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid
                    item
                    xs={2.3}
                    style={{
                        marginRight: '0.5rem',
                        marginLeft: '2rem',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                        width: '33vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Grid>
                        <Link to="/RAN" style={{ textDecoration: 'none' }}>
                            <Typography
                                style={{
                                    color: '#044590',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    fontSize: '1.4em'
                                }}
                            >
                                RAN
                            </Typography>
                        </Link>
                    </Grid>
                    <div
                        style={{
                            width: '100%',
                            height: '1.5px',
                            backgroundColor: '#6898ce',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                    />
                    <Link to="/RAN" style={{ textDecoration: 'none' }}>
                        <Grid style={{ width: 120, height: 120 }}>
                            <CircularProgressbar
                                value={value}
                                maxValue={1}
                                text={`${value * 100}%`}
                                styles={buildStyles({
                                    textColor: '#8884d8',
                                    pathColor: '#8884d8'
                                })}
                            />
                        </Grid>
                    </Link>
                </Grid>

                <Grid item xs={0.2}>
                    <div
                        style={{
                            width: '2px',
                            height: '30vh',
                            backgroundColor: '#c2c2c2',
                            marginTop: '2rem',
                            marginBottom: '1rem'
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={2.5}
                    style={{
                        margin: '0.5rem',
                        width: '33vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Grid>
                        <Link to="/transmission" style={{ textDecoration: 'none' }}>
                            <Typography
                                style={{
                                    color: '#044590',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    fontSize: '1.4em'
                                }}
                            >
                                Transmission
                            </Typography>
                        </Link>
                    </Grid>
                    <div
                        style={{
                            width: '100%',
                            height: '1.5px',
                            backgroundColor: '#6898ce',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                    />
                    <Link to="/transmission" style={{ textDecoration: 'none' }}>
                        <Grid style={{ width: 120, height: 120 }}>
                            <CircularProgressbar
                                value={value1}
                                maxValue={1}
                                text={`${value1 * 100}%`}
                                styles={buildStyles({
                                    textColor: '#82ca9d',
                                    pathColor: '#82ca9d'
                                })}
                            />
                        </Grid>
                    </Link>
                </Grid>

                <Grid item xs={0.2}>
                    <div
                        style={{
                            width: '2px',
                            height: '30vh',
                            backgroundColor: '#c2c2c2',
                            marginTop: '2rem',
                            marginBottom: '1rem'
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={2.5}
                    style={{
                        margin: '0.5rem',
                        width: '33vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Grid>
                        <Link to="/corecs" style={{ textDecoration: 'none' }}>
                            <Typography
                                style={{
                                    color: '#044590',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    fontSize: '1.4em'
                                }}
                            >
                                Core(CS)
                            </Typography>
                        </Link>
                    </Grid>
                    <div
                        style={{
                            width: '100%',
                            height: '1.5px',
                            backgroundColor: '#6898ce',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                    />
                    <Link to="/corecs" style={{ textDecoration: 'none' }}>
                        <Grid style={{ width: 120, height: 120 }}>
                            <CircularProgressbar
                                value={value2}
                                maxValue={1}
                                text={`${value2 * 100}%`}
                                styles={buildStyles({
                                    textColor: '#480ca8',
                                    pathColor: '#480ca8'
                                })}
                            />
                        </Grid>
                    </Link>
                </Grid>

                <Grid item xs={0.2}>
                    <div
                        style={{
                            width: '2px',
                            height: '30vh',
                            backgroundColor: '#c2c2c2',
                            marginTop: '2rem',
                            marginBottom: '1rem'
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={2.5}
                    style={{
                        margin: '0.5rem',
                        width: '33vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Grid>
                        <Link to="/coreps" style={{ textDecoration: 'none' }}>
                            <Typography
                                style={{
                                    color: '#044590',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    fontSize: '1.4em'
                                }}
                            >
                                Core(PS)
                            </Typography>
                        </Link>
                    </Grid>
                    <div
                        style={{
                            width: '100%',
                            height: '1.5px',
                            backgroundColor: '#6898ce',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                    />
                    <Link to="/coreps" style={{ textDecoration: 'none' }}>
                        <Grid style={{ width: 120, height: 120 }}>
                            <CircularProgressbar
                                value={value3}
                                maxValue={1}
                                text={`${value3 * 100}%`}
                                styles={buildStyles({
                                    textColor: '#ffc8dd',
                                    pathColor: '#ffc8dd'
                                })}
                            />
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Card>
    );
}

export default index;
