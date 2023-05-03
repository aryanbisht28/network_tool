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

    border: '2px solid #000',

    boxShadow: 24,

    pt: 2,

    px: 4,

    pb: 3
};

function Critical() {
    const [open, setOpen] = React.useState(false);

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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Mean Opinion Score (MOS)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        {/* onClick={handleClose} */}
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
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
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
                            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
            <div style={{ display: 'flex', justifyContent: 'center', height: '5vh' }}>
                <div style={Kpi}>
                    <h5>Packet Discard Rate (PDR)</h5>
                </div>
                <div></div>
                <div style={btn}>
                    <Button variant="text" style={{ marginTop: '0.5rem' }}>
                        {/* onClick{handleClose1} */}
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
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
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
                            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
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
        </div>
    );
}

export default Critical;
