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

const Ticket = ({ isLoading, name, value }) => {
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
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0.530433 6 1.03914 6.21071 1.41421 6.58579C1.78929 6.96086 2 7.46957 2 8C2 8.53043 1.78929 9.03914 1.41421 9.41421C1.03914 9.78929 0.530433 10 0 10V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V10C19.4696 10 18.9609 9.78929 18.5858 9.41421C18.2107 9.03914 18 8.53043 18 8C18 7.46957 18.2107 6.96086 18.5858 6.58579C18.9609 6.21071 19.4696 6 20 6V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2ZM2 2H18V4.54C16.76 5.25 16 6.57 16 8C16 9.43 16.76 10.75 18 11.46V14H2V11.46C3.24 10.75 4 9.43 4 8C4 6.57 3.24 5.25 2 4.54V2Z"
                                            fill="black"
                                        />
                                    </svg>
                                </Grid>
                                <Grid
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'center',
                                        marginLeft: '5px',
                                        marginTop: '0.5rem'
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
                                        Ticket Not Raised
                                    </Typography>
                                </Grid>
                            </div>

                            <Grid style={{ width: '20%' }}>
                                <Typography
                                    color="#0C233C"
                                    variant="h2"
                                    style={{ fontWeight: '500', textAlign: 'center', fontSize: '2em', margin: '0.2em' }}
                                >
                                    2
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

export default Ticket;
