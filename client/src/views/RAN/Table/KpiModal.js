import React from 'react';
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

function KpiModal() {
    const [kpi, setKpi] = React.useState('Critical');
    const handleChange = (event) => {
        setKpi(event.target.value);
    };
    return (
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
            <div style={{ margin: '1rem' }}>{kpi == 'Average' ? <MediumEle /> : kpi == 'Normal' ? <NormalEle /> : <CriticalEle />}</div>
        </Box>
    );
}

export default KpiModal;
