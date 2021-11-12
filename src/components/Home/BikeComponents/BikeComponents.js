import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';

const BikeComponents = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 3, color: '#1B4F72', my: 5 }} variant="h4" component="div">Components & Biking</Typography>
            <Grid container spacing={2} sx={{ mb: 10 }}>
                <Grid item xs={12} md={8}>
                    <img style={{ width: '100%' }} src="https://i.ibb.co/68J4JD8/name-bicycle2.png" alt="BiCycle" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Rules
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>What are the cycle rules?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                TRAFFIC RULES & MANNERS
                                Go straight and turn left. Bicycles follow signals for cars.
                                When walking or pushing your bicycle, follow the signals for pedestrians.
                                Intersection without traffic light. You can go forward safely.
                                Intersection without traffic light. Stop and make sure you are safe.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Brands</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Which brand cycle is best?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Here are the top ten brands for Indian bicycles to help you make the choice:
                                1. Hero. Based out of Punjab, it not only exports to more than 70 countries but has also been active in India with multiple models for six decades now. ...
                                2. Atlas.
                                3. Avon.
                                4. Hercules.
                                5. La-sovereign.
                                9. Mach City.
                                10. Road Master.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Cycling
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Can I cycle every day?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Cycling everyday is good when done with proper intensity level and if your body has sufficient time to recover. Competitive cyclists need recovery days given the intensity of their training and races, while more casual cyclists can cycle without taking days off.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Requirements</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                What do I need for cycling?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Items we would advise you invest in are:
                                Helmet.
                                Lock (if you plan to leave the bike anywhere)
                                Bike lights.
                                Gloves (in winter)
                                Padded cycling shorts (or tights in winter), a base layer, jersey and quality waterproof jacket.
                                Shoes and pedals.
                                Track pump (for use at home), mini pump, puncture repair kit.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Preparation</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                How do you prepare for a cycle?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                How to Prep for Your First Bike Ride
                                RELATED: How (Not) to Get Someone Riding.
                                Find a bike that fits you. ...
                                Prepare your bike. ...
                                Make sure your helmet is properly adjusted. ...
                                Review the rules of the road. ...
                                RELATED: 6 Things You Need to Do Before Every Ride.
                                Plan your route—and keep a map handy. ...
                                Pack a few tools.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BikeComponents;