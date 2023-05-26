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
import CriticalEle2 from './kpi2/CriticalEle';
import NormalEle2 from './kpi2/NormalEle';
import MediumEle2 from './kpi2/MediumEle';
import CriticalEle3 from './kpi3/CriticalEle';
import NormalEle3 from './kpi3/NormalEle';
import MediumEle3 from './kpi3/MediumEle';
import CriticalEle4 from './kpi4/CriticalEle';
import NormalEle4 from './kpi4/NormalEle';
import MediumEle4 from './kpi4/MediumEle';
import CriticalEle5 from './kpi5/CriticalEle';
import NormalEle5 from './kpi5/NormalEle';
import MediumEle5 from './kpi5/MediumEle';
import CriticalEle6 from './kpi6/CriticalEle';
import NormalEle6 from './kpi6/NormalEle';
import MediumEle6 from './kpi6/MediumEle';
import CriticalEle7 from './kpi7/CriticalEle';
import NormalEle7 from './kpi7/NormalEle';
import MediumEle7 from './kpi7/MediumEle';
import CriticalEle8 from './kpi8/CriticalEle';
import NormalEle8 from './kpi8/NormalEle';
import MediumEle8 from './kpi8/MediumEle';
import CriticalEle9 from './kpi9/CriticalEle';
import NormalEle9 from './kpi9/NormalEle';
import MediumEle9 from './kpi9/MediumEle';
import CriticalEle10 from './kpi10/CriticalEle';
import NormalEle10 from './kpi10/NormalEle';
import MediumEle10 from './kpi10/MediumEle';
import CriticalEle11 from './kpi11/CriticalEle';
import NormalEle11 from './kpi11/NormalEle';
import MediumEle11 from './kpi11/MediumEle';
import CriticalEle12 from './kpi12/CriticalEle';
import NormalEle12 from './kpi12/NormalEle';
import MediumEle12 from './kpi12/MediumEle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

function Normal() {
    const [open, setOpen] = React.useState(false);
    const [kpi, setKpi] = React.useState('Critical');
    const handleChange = (event) => {
        setKpi(event.target.value);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const [open5, setOpen5] = React.useState(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);
    const [open6, setOpen6] = React.useState(false);
    const handleOpen6 = () => setOpen6(true);
    const handleClose6 = () => setOpen6(false);
    const [open7, setOpen7] = React.useState(false);
    const handleOpen7 = () => setOpen7(true);
    const handleClose7 = () => setOpen7(false);
    const [open8, setOpen8] = React.useState(false);
    const handleOpen8 = () => setOpen8(true);
    const handleClose8 = () => setOpen8(false);
    const [open9, setOpen9] = React.useState(false);
    const handleOpen9 = () => setOpen9(true);
    const handleClose9 = () => setOpen9(false);
    const [open10, setOpen10] = React.useState(false);
    const handleOpen10 = () => setOpen10(true);
    const handleClose10 = () => setOpen10(false);
    const [open11, setOpen11] = React.useState(false);
    const handleOpen11 = () => setOpen11(true);
    const handleClose11 = () => setOpen11(false);
    const [open12, setOpen12] = React.useState(false);
    const handleOpen12 = () => setOpen12(true);
    const handleClose12 = () => setOpen12(false);
    const [open13, setOpen13] = React.useState(false);
    const handleOpen13 = () => setOpen13(true);
    const handleClose13 = () => setOpen13(false);
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>RRC Connection setup success Rate (Service)</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen}>
                        View
                    </Button>
                </div>
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
                                        Current Value : 99.85
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
                    <h5>RRC Connection setup success Rate (All)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen1}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open1}
                        onClose={handleClose1}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open1}>
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
                                            Current Value : 99.92
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
                                    {kpi == 'Average' ? <MediumEle2 /> : kpi == 'Normal' ? <NormalEle2 /> : <CriticalEle2 />}
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
                    <h5>E-RAB Setup Success Rate (All)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen2}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open2}
                        onClose={handleClose2}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open2}>
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
                                            Current Value : 99.91
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
                                    {kpi == 'Average' ? <MediumEle3 /> : kpi == 'Normal' ? <NormalEle3 /> : <CriticalEle3 />}
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
                    <h5>Initial E-RAB Setup Success Rate</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen3}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open3}
                        onClose={handleClose3}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open3}>
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
                                            Current Value : 99.88
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
                                    {kpi == 'Average' ? <MediumEle4 /> : kpi == 'Normal' ? <NormalEle4 /> : <CriticalEle4 />}
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
                    <h5>Service Setup Success Rate (All)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen5}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open5}
                        onClose={handleClose5}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open5}>
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
                                            Current Value : 99.95
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
                                    {kpi == 'Average' ? <MediumEle5 /> : kpi == 'Normal' ? <NormalEle5 /> : <CriticalEle5 />}
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
                    <h5>DL Traffic Volume [GBytes]</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen6}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open6}
                        onClose={handleClose6}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open6}>
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
                                            Current Value : 90.45
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
                                    {kpi == 'Average' ? <MediumEle6 /> : kpi == 'Normal' ? <NormalEle6 /> : <CriticalEle6 />}
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
                    <h5>Call Drop Rate (ALL)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen7}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open7}
                        onClose={handleClose7}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open7}>
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
                                            Current Value : 0.13
                                        </Typography>
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'right' }}>
                                        <Typography id="transition-modal-title" variant="h4" component="h2">
                                            Threshold Value : 1%
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
                                    {kpi == 'Average' ? <MediumEle7 /> : kpi == 'Normal' ? <NormalEle7 /> : <CriticalEle7 />}
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
                    <h5>Average No. Of Users</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }} onClick={handleOpen8}>
                        View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open8}
                        onClose={handleClose8}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500
                            }
                        }}
                    >
                        <Fade in={open8}>
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
                                            Current Value : 475009.934
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
                                    {kpi == 'Average' ? <MediumEle8 /> : kpi == 'Normal' ? <NormalEle8 /> : <CriticalEle8 />}
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

export default Normal;
