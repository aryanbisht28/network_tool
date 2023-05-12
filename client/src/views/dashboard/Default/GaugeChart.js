import React from 'react';
import GaugeChart from 'react-gauge-chart';
import MainCard from 'ui-component/cards/MainCard';
import { styled } from '@mui/material/styles';
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//     backgroundColor: '#ffff',
//     color: '#fff',
//     overflow: 'hidden',
//     position: 'relative',
//     '&:after': {
//         content: '""',
//         position: 'absolute',
//         width: 210,
//         height: 210,
//         background: '#ffff'
//     }
// }));

const GaugesChart = () => {
    return (
        <div style={{ height: '35vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', margin: '1rem' }}>
            <h3 style={{ textAlign: 'left', fontSize: '1rem', color: '#044590', margin: '0', padding: '0' }}>Network Health : 96%</h3>
            <div
                style={{
                    width: '108%',
                    height: '1.5px',
                    backgroundColor: '#6898ce',
                    marginTop: '10px',
                    marginBottom: '10px',
                    marginLeft: '-10px'
                }}
            />
            <div>
                <GaugeChart
                    id="gauge-chart1"
                    nrOfLevels={5}
                    arcsLength={[0.4, 0.3, 0.3, 0.2, 0.2]}
                    colors={['#dc143c', '#ff0000', '#ffa500', 'yellow', 'green']}
                    percent={0.96}
                    arcPadding={0.01}
                    needleColor="#345243"
                    textColor={'black'}
                    hideText={true}
                />
            </div>
        </div>
    );
};

export default GaugesChart;
