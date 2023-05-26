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

const TransCard = ({ isLoading }) => {
    const value = 0.97;
    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 1 }}>
                        <Grid container direction="column" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid sx={{ m: 1 }}>
                                <Typography
                                    style={{
                                        color: '#044590',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        fontSize: '1em'
                                    }}
                                >
                                    Transmission
                                </Typography>
                            </Grid>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1.5px',
                                    backgroundColor: '#6898ce',
                                    marginTop: '2px',
                                    marginBottom: '10px'
                                }}
                            />
                            <Grid item>
                                <Grid>
                                    <Grid style={{ width: 90, height: 90 }}>
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

export default TransCard;
