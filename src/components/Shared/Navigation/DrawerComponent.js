import React, { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@mui/material/Button';
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    icon: {
        color: "white"
    }
}));


function DrawerComponent() {
    const { user, logOut } = useAuth();
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">HOME</Button></NavLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink to="/bikes" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">BIKES</Button></NavLink>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            {
                                user?.email ?
                                    <>
                                        <NavLink to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">DashBoard</Button></NavLink>
                                        <Divider variant="middle" />
                                        <Button onClick={logOut} color="inherit">Sign Out</Button>
                                    </>
                                    :
                                    <NavLink to="/login" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">Login</Button></NavLink>
                            }
                        </ListItemText>
                    </ListItem>
                    <Divider variant="middle" />
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;