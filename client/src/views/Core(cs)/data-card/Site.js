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

const Site = ({ isLoading, name, value }) => {
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
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9 2.5V8.5H11V11.5H5C3.89 11.5 3 12.39 3 13.5V16.5H1V22.5H7V16.5H5V13.5H11V16.5H9V22.5H15V16.5H13V13.5H19V16.5H17V22.5H23V16.5H21V13.5C21 12.39 20.11 11.5 19 11.5H13V8.5H15V2.5H9Z"
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
                                        Impacted Site
                                    </Typography>
                                </Grid>
                            </div>

                            <Grid style={{ width: '20%' }}>
                                <Typography
                                    color="#0C233C"
                                    variant="h2"
                                    style={{ fontWeight: '500', textAlign: 'center', fontSize: '2em', margin: '0.2em' }}
                                >
                                    6
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

export default Site;
