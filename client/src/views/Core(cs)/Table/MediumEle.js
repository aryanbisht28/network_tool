import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './Style/Scroll.css';

function MediumEle() {
    let yellow = {
        color: '#FCA510'
    };
    return (
        <div className="container" style={{ overflowY: 'scroll', height: '62vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NKUXING0011</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Haryana North</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>19.186354</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>73.191948</h5>
                </div>

                <div style={{ width: '20%' }}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NMGMMHG0011</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Haryana North</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>30.525005</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>75.890121</h5>
                </div>
                <div style={{ width: '20%' }}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NFTPFPG0101</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Uttrakhand West</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>22.422455</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>85.760651</h5>
                </div>

                <div style={{ width: '20%' }}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        View
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h5 style={yellow}>NFTPFPG0113</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>Uttrakhand West</h5>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>18.106659</h5>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h5>83.395554</h5>
                </div>
            </div>
        </div>
    );
}

export default MediumEle;
