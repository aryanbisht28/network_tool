import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './Style/Scroll.css';

function Medium() {
    let yellow = {
        color: '#FCA510'
    };
    const critical = {
        width: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
        background: '#fff2da',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: '#ffc153',
        color: '#deba79'
    };
    const btn = {
        width: '20%',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center'
    };
    let Kpi = {
        width: '65%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        color: '#201F1F'
    };
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Packet Discard Ratio </h5>
                </div>
                <div style={critical}>
                    <h5>Average</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Data Session Retention Rate</h5>
                </div>
                <div style={critical}>
                    <h5>Average</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Handover Success Rate </h5>
                </div>
                <div style={critical}>
                    <h5>Average</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5> Tracking area update success rate </h5>
                </div>
                <div style={critical}>
                    <h5>Average</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5> Attach delay </h5>
                </div>
                <div style={critical}>
                    <h5>Average</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
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
    );
}

export default Medium;
