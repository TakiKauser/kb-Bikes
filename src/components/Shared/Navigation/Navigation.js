import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import Drawer from "./DrawerComponent";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        textAlign: "start",
        display: "flex",
        marginBottom: "14px"
    },
    logo: {
        flexGrow: "1",
        textAlign: "start",
        cursor: "pointer",
        marginBottom: "14px",

    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "15px",
        margin: "8px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navigation() {
    const { user, logOut } = useAuth();
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" >
            <CssBaseline />
            <Toolbar >
                <Typography variant="h6" className={classes.logo}>
                    kb-Bikes
                </Typography>
                {isMobile ? (
                    <Drawer />
                ) : (
                    <div className={classes.navlinks}>
                        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">HOME</Button></NavLink>
                        <NavLink to="/bikes" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">BIKES</Button></NavLink>
                        {
                            user?.email ?

                                <Box>
                                    <NavLink to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">DashBoard</Button></NavLink>
                                    <Button onClick={logOut} color="inherit">Sign Out</Button>
                                </Box>
                                :
                                <NavLink to="/login" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">Login</Button></NavLink>
                        }
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navigation;