import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import './Style/Scroll.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { width } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 570,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
    // overflowY: 'scroll'
};

function CriticalEle() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function createData(name, calories) {
        return { name, calories };
    }
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    const rows = [
        createData('Networks reported a BGP routing issue in RRBA. Routing was reset on the affected router', '87%'),
        createData('UGW-GMS Traffic was switched between TI router', '93%'),
        createData('Contractors done hauling the cable & splicing done', '96%'),
        createData('IP-NET  card was replaced', '76%')
        // createData('Gingerbread', 356)
    ];

    let yellow = {
        color: '#FF0000'
    };

    const critical = {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
        background: '#ffdada',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: '#ff4646',
        color: '#FF0000'
    };
    const bottomLine = {
        width: '100%',
        height: '1.5px',
        backgroundColor: '#cdcdcd',
        marginTop: '10px',
        marginBottom: '10px'
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <h3>Network Elements</h3>
                </div>

                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Location</h3>
                </div>
                <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Latitude</h3>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Longitude</h3>
                </div>
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
            </div>
            <div style={bottomLine} />
        </>
    );
}

export default CriticalEle;
