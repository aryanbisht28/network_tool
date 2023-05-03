import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: 'rgba(172, 234, 255, 0.5)',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: '#2a9df4'
    }
}));
// }

const Incident = ({ isLoading, name, value }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 1 }}>
                        <Grid container>
                            <div
                                style={{
                                    width: '80%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                    // justifyContent: 'center',
                                    // alignItems: 'center'
                                }}
                            >
                                <Grid
                                    item
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'center',
                                        margin: '5px'
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H10V19H5V8H19V9H21V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.85 11.14 20.19 11.13 20.42 11.35L21.7 12.63C21.89 12.83 21.89 13.15 21.7 13.35ZM12 18.94L18.07 12.88L20.12 14.88L14.06 21H12V18.94Z"
                                            fill="black"
                                        />
                                    </svg>
                                </Grid>
                                <Grid
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'center',
                                        marginLeft: '5px'
                                    }}
                                >
                                    <Typography
                                        style={{
                                            color: '#0C233C',
                                            fontWeight: '400',
                                            textAlign: 'center',
                                            fontSize: '1.2em'
                                        }}
                                    >
                                        Total Incident
                                    </Typography>
                                </Grid>
                            </div>

                            <Grid style={{ width: '20%' }}>
                                <Typography
                                    color="#0C233C"
                                    variant="h2"
                                    style={{ fontWeight: '500', textAlign: 'center', fontSize: '2em', margin: '0.2em' }}
                                >
                                    10
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

export default Incident;
