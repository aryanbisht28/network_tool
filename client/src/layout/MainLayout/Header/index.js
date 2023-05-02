import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import Typography from '@mui/material/Typography';
// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

function Header({ title, subtitle }) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // background: '#00338D',
                    width: '100%'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft: '1rem'
                    }}
                >
                    <div>
                        <Typography
                            variant="h4"
                            sx={{
                                margin: 1
                            }}
                        >
                            {/* Hi */}
                            {title}
                        </Typography>
                    </div>
                    {subtitle != '' ? (
                        <div>
                            <Typography
                                variant="h4"
                                sx={{
                                    margin: 1
                                }}
                            >
                                /{subtitle}
                            </Typography>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div>
                    <ProfileSection />
                </div>
            </div>
        </>
    );
}

// Header.propTypes = {
//     handleLeftDrawerToggle: PropTypes.func
// };

export default Header;
