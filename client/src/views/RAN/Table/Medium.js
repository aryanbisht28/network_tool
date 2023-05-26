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
import CriticalEle9 from './kpi9/CriticalEle';
import NormalEle9 from './kpi9/NormalEle';
import MediumEle9 from './kpi9/MediumEle';
import CriticalEle10 from './kpi10/CriticalEle';
import NormalEle10 from './kpi10/NormalEle';
import MediumEle10 from './kpi10/MediumEle';
import CriticalEle11 from './kpi11/CriticalEle';
import NormalEle11 from './kpi11/NormalEle';
import MediumEle11 from './kpi11/MediumEle';
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

function Medium() {
    const [kpi, setKpi] = React.useState('Critical');
    const handleChange = (event) => {
        setKpi(event.target.value);
    };
    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const [open10, setOpen10] = React.useState(false);
    const handleOpen10 = () => setOpen10(true);
    const handleClose10 = () => setOpen10(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <h5>Added E-RAB Setup Success Rate</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen4}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open4}
                        onClose={handleClose4}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open4}>
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
                                            Current Value : 98.9
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
                                    {kpi == 'Average' ? <MediumEle9 /> : kpi == 'Normal' ? <NormalEle9 /> : <CriticalEle9 />}
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Inter-frequency Handover Out Success Rate(%)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen10}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open10}
                        onClose={handleClose10}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open10}>
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
                                            Current Value : 98.6
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
                                    {kpi == 'Average' ? <MediumEle10 /> : kpi == 'Normal' ? <NormalEle10 /> : <CriticalEle10 />}
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Intra-frequency Handover Out Success Rate</h5>
                </div>
                <div></div>
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
                                            Current Value : 98.6
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
                                    {kpi == 'Average' ? <MediumEle11 /> : kpi == 'Normal' ? <NormalEle11 /> : <CriticalEle11 />}
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

export default Medium;
