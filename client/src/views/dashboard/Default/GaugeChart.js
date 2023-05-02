import React from 'react';
import GaugeChart from 'react-gauge-chart';
import MainCard from 'ui-component/cards/MainCard';

const GaugesChart = () => {
    return (
        <MainCard style={{ height: '54vh', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ textAlign: 'left', fontSize: '1.5rem', color: '#044590' }}>Network Health : 96%</h3>
            <div
                style={{
                    width: '100%',
                    height: '1.5px',
                    backgroundColor: '#6898ce',
                    marginTop: '10px',
                    marginBottom: '10px'
                }}
            />
            <div style={{ marginTop: '1.5em' }}>
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
        </MainCard>
    );
};

export default GaugesChart;
