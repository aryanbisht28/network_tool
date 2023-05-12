import React from 'react';
import Card from '@mui/material/Card';

function TopKpi() {
    let Kpi = {
        width: '70%',
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
                height: '41vh',
                position: 'relative',
                marginBottom: '1%',
                padding: '1%',
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                marginTop: '-5rem'
                // width: '31vw'
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Radio resource control setup success rate</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>97%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f8fe' }}>
                    <div style={Kpi}>
                        <h5>Attach success rate</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>96.7%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>RAN Connection Setup Success Rate</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>96.2%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f8fe' }}>
                    <div style={Kpi}>
                        <h5>Tracking Area Update Success Rate</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>95.8%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Packet Retransmission Rate</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>95.2%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f8fe' }}>
                    <div style={Kpi}>
                        <h5>Network Uptime</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>94.4%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Mean Time Between Failures</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>94%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f8fe' }}>
                    <div style={Kpi}>
                        <h5>PS Data Session Success Rate</h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>93.6%</h5>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={Kpi}>
                        <h5>Service Accessibility </h5>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <h5>93.2%</h5>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default TopKpi;
