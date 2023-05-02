import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './Style/Scroll.css';

function CriticalEle() {
    let yellow = {
        color: '#FF0000'
    };
    return (
        <div className="container" style={{ overflowY: 'scroll', height: '62vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NMENMNG0113</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Haryana North</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>22.656015</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>86.352882</h5>
                </div>
                <div style={{ width: '20%' }}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NMENMEG0012</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Haryana North</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>15.756595</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>76.192696</h5>
                </div>

                <div style={{ width: '20%' }}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NKNIMXG0011</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Haryana North</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>25.989836</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>79.450035</h5>
                </div>
            </div>
        </div>
    );
}

export default CriticalEle;
