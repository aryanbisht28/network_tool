import React from 'react';
import Card from '@mui/material/Card';

function Circle() {
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
                height: '23vh',
                position: 'relative',
                marginBottom: '1%',
                padding: '1%',
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                width: '31vw'
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
    );
}

export default Circle;
