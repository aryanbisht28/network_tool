import React from 'react';
import Button from '@mui/material/Button';
import './Style/Scroll.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import LineChart from './LineChart';
import CriticalEle from './CriticalEle';
import NormalEle from './NormalEle';
import MediumEle from './MediumEle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KpiModal from './KpiModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
    // overflowY: 'scroll'
};

function Critical() {
    const [open, setOpen] = React.useState(false);
    const [kpi, setKpi] = React.useState('Critical');
    const handleChange = (event) => {
        setKpi(event.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };

    const critical = {
        width: '15%',
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
                    <h5>Radio Network Availability Rate</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <h2 style={{ margin: '1rem', color: 'black' }}>KPI Performance View</h2>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        margin: '1rem'
                                    }}
                                >
                                    <div style={{ width: '50%', textAlign: 'left' }}>
                                        <Typography id="transition-modal-title" variant="h4" component="h2">
                                            Current Value : 96.92
                                        </Typography>
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'right' }}>
                                        <Typography id="transition-modal-title" variant="h4" component="h2">
                                            Threshold Value : 98
                                        </Typography>
                                    </div>
                                </div>
                                <div>
                                    <LineChart />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0.5rem' }}>
                                    <div style={{ width: '80%' }}>
                                        <h2 style={{ textAlign: 'left', fontSize: '1rem', color: 'Black' }}>List of Network Elements</h2>
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
                                                <MenuItem value={'Critical'}>Critical</MenuItem>
                                                <MenuItem value={'Average'}>Average</MenuItem>
                                                <MenuItem value={'Normal'}>Normal</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div style={{ margin: '1rem' }}>
                                    {kpi == 'Average' ? <MediumEle /> : kpi == 'Normal' ? <NormalEle /> : <CriticalEle />}
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
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

export default Critical;
