import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './Style/Scroll.css';

import Box from '@mui/material/Box';

const style = {
    position: 'absolute',

    top: '50%',

    left: '50%',

    transform: 'translate(-50%, -50%)',

    width: 400,

    bgcolor: 'background.paper',

    border: '2px solid #000',

    boxShadow: 24,

    pt: 2,

    px: 4,

    pb: 3
};

function Medium() {
    const [open1, setOpen1] = React.useState(false);

    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleClose = () => {
        setOpen1(false);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };
    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };
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
                    <h5>Bit Error Rate</h5>
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
                    <h5>Packet Loss Rate (PLR)</h5>
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
                    <h5>Latency or Delay</h5>
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
                    <h5>Round Trip Time (RTT)</h5>
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
