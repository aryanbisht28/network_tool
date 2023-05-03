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
    const [kpi, setKpi] = React.useState('');
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
                    <h5>Radio resource control setup success rate</h5>
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
                                {/* <h3>Threshold Value</h3> */}
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
                                            Current Value : 97.6
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

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        margin: '1rem'
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            setKpi('30');
                                        }}
                                    >
                                        Critical
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            setKpi('20');
                                        }}
                                    >
                                        Average
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            setKpi('10');
                                        }}
                                    >
                                        Normal
                                    </Button>
                                </div>
                                <div style={{ margin: '1rem' }}>
                                    {kpi == '20' ? <MediumEle /> : kpi == '10' ? <NormalEle /> : <CriticalEle />}
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
                    <h5>Attach success rate</h5>
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
                                <h3>Threshold Value</h3>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div style={{ width: '50%', textAlign: 'center' }}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Ideal Value : 98
                                        </Typography>
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'center' }}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Current Value : 98.44
                                        </Typography>
                                    </div>
                                </div>
                                <h3>Network Elements</h3>
                                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                                <div style={{ width: '80%' }}>
                                    <Typography id="transition-modal-title" variant="h5" component="h2">
                                        Network Elements
                                    </Typography>
                                </div>
                                <div style={{ width: '20%' }}>
                                    <Typography id="transition-modal-title" variant="h5" component="h2">
                                        Value
                                    </Typography>
                                </div>
                            </div> */}
                                <div className="container" style={{ overflowY: 'scroll', height: '40vh' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItem: 'center',
                                            height: '5vh'
                                        }}
                                    >
                                        <div style={{ width: '80%' }}>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                KYQ
                                            </Typography>
                                        </div>
                                        <div style={{ width: '20%' }}>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                96%
                                            </Typography>
                                        </div>
                                    </div>
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
                    <h5>RAN Connection Setup Success Rate</h5>
                </div>
                <div></div>

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

export default Critical;
