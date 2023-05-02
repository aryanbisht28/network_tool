import React from 'react';
import Button from '@mui/material/Button';
import './Style/Scroll.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

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

function Normal() {
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>session establishment success rate</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
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
                                        Ideal Value :
                                    </Typography>
                                </div>
                                <div style={{ width: '50%', textAlign: 'center' }}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        Current Value :
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            EVC
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
                    <h5>Location update success rate</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
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
                                        Current Value :97.4
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
                                            TDV
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            SZE
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            ALA
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            HHR
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
                    <h5>data session retention rate</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
                </div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
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
                                        Current Value :97.4
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
                                            TDV
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            SZE
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            ALA
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            96%
                                        </Typography>
                                    </div>
                                </div>
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
                                            HHR
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
                    <h5>Core Network Retainability</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
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
                    <h5>VoLTE Call Setup Time</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
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
                    <h5>VoLTE Call Setup Delay</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
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
                    alignItem: 'center',
                    height: '5vh'
                }}
            >
                <div style={Kpi}>
                    <h5>VoLTE Seizure Success Rate</h5>
                </div>
                <div style={critical}>
                    <h5>Normal</h5>
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

export default Normal;
