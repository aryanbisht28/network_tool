import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import MyLocationIcon from '@mui/icons-material/MyLocation';

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

const Assign = ({ isLoading, name, value }) => {
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
                                            d="M18 19H6V17.6C6 15.6 10 14.5 12 14.5C14 14.5 18 15.6 18 17.6M12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7ZM12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289C12.8946 3.48043 13 3.73478 13 4C13 4.26522 12.8946 4.51957 12.7071 4.70711C12.5196 4.89464 12.2652 5 12 5C11.7348 5 11.4804 4.89464 11.2929 4.70711C11.1054 4.51957 11 4.26522 11 4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
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
                                        marginTop: '0.4rem'
                                    }}
                                >
                                    <Typography
                                        style={{
                                            color: '#0C233C',
                                            fontWeight: '400',
                                            textAlign: 'center',
                                            fontSize: '1em'
                                        }}
                                    >
                                        Ticket Not Assigned
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

export default Assign;
