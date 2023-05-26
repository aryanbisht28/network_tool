import React from 'react';
import Button from '@mui/material/Button';
import './Table/Style/Scroll.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Medium from './Table/Medium';
import Critical from './Table/Critical';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};

function Service() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let green = {
        color: 'green'
    };
    const critical = {
        width: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
        background: '#c8e2e0',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: '#2f936d',
        color: '#64ae95'
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
            <Medium />
            <Critical />
        </div>
    );
}

export default Service;
