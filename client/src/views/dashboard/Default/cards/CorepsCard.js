import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#ffff',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: '#ffff'
    }
}));
// }

const CorepsCard = ({ isLoading }) => {
    const value = 0.36;
    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false} style={{ width: '33vh' }}>
                    <Box sx={{ p: 1 }}>
                        <Grid sx={{ m: 1 }}>
                            <Typography
                                style={{
                                    color: '#044590',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    fontSize: '1.4em'
                                }}
                            >
                                Core(PS) Health
                            </Typography>
                        </Grid>
                        <div
                            style={{
                                width: '100%',
                                height: '1.5px',
                                backgroundColor: '#6898ce',
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}
                        />
                        <Grid container direction="column" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item>
                                <Grid>
                                    <Grid style={{ width: 120, height: 120 }}>
                                        <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

export default CorepsCard;
