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
    width: 850,
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

    let red = {
        color: '#FF0000'
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Unavailability Duration</h5>
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
                                        justifyContent: 'space-between',
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Traffic Utilization</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Average Network Utilization</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Resource Utilization by Service Type</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Average Call Duration (ACD)</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Call Setup Success Rate (CSSR)</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Call Drop Rate</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Call Completion Time</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Handover Success Rate</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Paging Success Rate</h5>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>Service Availability</h5>
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
