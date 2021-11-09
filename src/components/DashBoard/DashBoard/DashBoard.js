import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../UserAuth/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import Reviews from '../Reviews/Reviews';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';

const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { user, logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', color: '#1B4F72' }}>
                <Toolbar />
                <Divider />
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><HomeIcon /> Home Page</Button></Link>
                <Link to={`${url}`} style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><DashboardIcon /> DashBoard</Button></Link>
                {
                    // !admin &&
                    <Box>
                        <Link to={`${url}/payment`} style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><PaymentsIcon />Payment</Button></Link>
                        <Link to={`${url}/review`} style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><RateReviewIcon />Reviews</Button></Link>
                        <Link to={`${url}/myOrders`} style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><ListAltIcon />My Orders</Button></Link>
                    </Box>
                }
                {
                    admin &&
                    <Box>
                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><AddModeratorIcon />Make Admin</Button></Link>
                        <Link to={`${url}/addProduct`} style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit"><AddBoxIcon />Add Product</Button></Link>
                    </Box>
                }
                {
                    user?.email &&
                    <Box>
                        <Button onClick={logOut} color="inherit"><LogoutIcon />Sign Out</Button>
                    </Box>
                }
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ mx: 'auto' }}>
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Reviews />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
