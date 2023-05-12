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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 550,
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
            <div className="container" style={{ overflowY: 'scroll', height: '13vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                    <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                        <h5 style={yellow}>PMRZRLGG0662</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>UP East</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>24.879999</h5>
                    </div>
                    <div
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>74.629997</h5>
                    </div>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="text" onClick={handleOpen}>
                            View
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            // style={{ width: '600px' }}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 800 }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        margin: '1rem'
                                    }}
                                >
                                    <div style={{ width: '40%', textAlign: 'left' }}>
                                        <Typography id="transition-modal-title" variant="h3" component="h2">
                                            Incident No :
                                        </Typography>
                                        <Typography id="transition-modal-title" variant="h3" component="h2">
                                            IXC-22020212-0042
                                        </Typography>
                                    </div>
                                    <div style={{ width: '40%', textAlign: 'left' }}>
                                        <Typography id="transition-modal-title" variant="h3" component="h2">
                                            Ageing :+4 Days
                                        </Typography>
                                    </div>
                                    <div style={{ width: '20%', textAlign: 'left' }}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Status:
                                        </Typography>
                                        <div
                                            style={{
                                                background: 'rgba(51, 102, 39, 0.37)',
                                                border: ' 2px solid #215814',
                                                borderRadius: '10px',
                                                width: '50%',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                height: '5vh',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <span style={{ color: '#165009' }}>Open</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        border: '1px solid #000000',
                                        borderRadius: '20px',
                                        width: '28%',
                                        justifyContent: 'space-around',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '0.5rem'
                                        }}
                                    >
                                        <div style={{ width: '70%', textAlign: 'left' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Outage category : Packet loss
                                            </Typography>
                                        </div>
                                        <div style={{ width: '30%', textAlign: 'left' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Severity: Critical / Priority: N/A
                                            </Typography>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '0.5rem'
                                        }}
                                    >
                                        <div style={{ width: '70%' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Team: SAIX
                                            </Typography>
                                        </div>
                                        <div style={{ width: '30%' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Sub-Function: Core
                                            </Typography>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '0.5rem'
                                        }}
                                    >
                                        <div style={{ width: '70%', textAlign: 'left' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Creation Date: 2/20/2023
                                            </Typography>
                                        </div>
                                        <div style={{ width: '30%', textAlign: 'left' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Created Time: 12:23:45 PM{' '}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '0.5rem'
                                        }}
                                    >
                                        <div style={{ width: '70%' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Closure Date:
                                            </Typography>
                                        </div>
                                        <div style={{ width: '30%', textAlign: 'left' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Closure Time:
                                            </Typography>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '0.5rem'
                                        }}
                                    >
                                        <div style={{ width: '70%' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Asssignee : Sohail
                                            </Typography>
                                        </div>
                                        <div style={{ width: '30%' }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Action Taken : None
                                            </Typography>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4>Recomended Resolution</h4>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell>Recomendation</TableCell>
                                                    <TableCell align="right">Success Percentage</TableCell>
                                                </TableRow>
                                            </TableHead>
                                        </Table>
                                    </TableContainer>
                                    <TableContainer component={Paper} style={{ overflowY: 'scroll', height: '15vh' }} class="container">
                                        <Table aria-label="simple table">
                                            {/* <TableHead>
                                            <TableRow>
                                                <TableCell>Resolution</TableCell>
                                                <TableCell align="right">Success Percentage</TableCell>
                                            </TableRow>
                                        </TableHead> */}
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="right">
                                                            <Checkbox />
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.calories}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'right', margin: '1rem' }}>
                                    <Button variant="contained" align="right" onClick={handleClickOpen1}>
                                        Submit
                                    </Button>
                                    <Dialog
                                        open={open1}
                                        onClose={handleClose1}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">Email has been sent</DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>OK</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div style={bottomLine} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
                    <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                        <h5 style={yellow}>PSNBRNKC0022</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>UP East</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>16.994444</h5>
                    </div>
                    <div
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>74.629997</h5>
                    </div>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="text">View</Button>
                    </div>
                </div>
                <div style={bottomLine} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                    <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                        <h5 style={yellow}>PMRZRLGG0662</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>UP East</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>24.879999</h5>
                    </div>
                    <div
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>73.300003</h5>
                    </div>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="text">View</Button>
                    </div>
                </div>
                <div style={bottomLine} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                    <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                        <h5 style={yellow}>PSNBSKSC0012</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>UP East</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>19.155001</h5>
                    </div>
                    <div
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>72.849998</h5>
                    </div>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="text">View</Button>
                    </div>
                </div>
                <div style={bottomLine} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '5vh' }}>
                    <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                        <h5 style={yellow}>PVRSCHUC0012</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>UP East</h5>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>24.7945</h5>
                    </div>
                    <div
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>73.055</h5>
                    </div>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="text">View</Button>
                    </div>
                </div>
                <div style={bottomLine} />
            </div>
        </>
    );
}

export default CriticalEle;
