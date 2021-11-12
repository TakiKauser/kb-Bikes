import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mb: 0, mt: 5, backgroundColor: '#1B4F72' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card sx={{ minWidth: 275, boxShadow: 0, border: 0, backgroundColor: '#1B4F72', color: 'white' }}>
                        <CardContent>
                            <Typography sx={{ textAlign: 'start', m: 1, color: "white" }} variant="h5" component="div">
                                SERVICES
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2">
                                Sales
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                Repairs
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                Maintenance
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                Servicing
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card sx={{ minWidth: 275, boxShadow: 0, border: 0, backgroundColor: '#1B4F72', color: 'white' }}>
                        <CardContent>
                            <Typography sx={{ textAlign: 'start', m: 1, color: "white" }} variant="h5" component="div">
                                kb Bikes
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                About
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                Contact Us
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                Bikes
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                Services
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card sx={{ minWidth: 275, boxShadow: 0, border: 0, backgroundColor: '#1B4F72', color: 'white' }}>
                        <CardContent>
                            <Typography sx={{ textAlign: 'start', m: 1, color: "white" }} variant="h5" component="div">
                                FIND US
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1 }} variant="body2" >
                                57/3 Sarishabari 2052
                            </Typography>
                            <Typography sx={{ textAlign: 'start', m: 1, mb: 2 }} variant="body2" >
                                Mymenshingh, Bangladesh
                            </Typography>
                            <Box sx={{ textAlign: 'start' }}>
                                <FacebookIcon sx={{ mx: 1 }}></FacebookIcon>
                                <GoogleIcon sx={{ mx: 1 }}></GoogleIcon>
                                <TwitterIcon sx={{ mx: 1 }}></TwitterIcon>
                            </Box>
                            <Typography sx={{ textAlign: 'start', m: 1, my: 2 }} variant="body2" >
                                Call Now
                            </Typography>
                            <Box sx={{ textAlign: 'start' }}>
                                <Button variant="contained" style={{ backgroundColor: "orange" }}> <CallIcon /> +02 345678910</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Typography sx={{ textAlign: 'center', mt: 1, mb: 0, pb: 1, color: 'white' }} variant="body2" >
                Copyright 2021 All Rights Reserved
            </Typography>
        </Box>
    );
};

export default Footer;