import React from 'react';
import MainCard from 'ui-component/cards/MainCard';

function TopCircle() {
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
                <h1></h1>
            </div>
        </MainCard>
    );
}

export default TopCircle;
