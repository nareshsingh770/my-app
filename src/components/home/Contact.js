import React from 'react'

import contactDetails from '../../actions/Actions';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper, Grid, Typography, Stack, TextField } from '@mui/material';
import Heading, { Para } from '../../styled component';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Box } from '@mui/system';


const Contact = () => {

    const typedDetails = useSelector((store) => store.messageInput);
    const dispatch = useDispatch()


    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none' }}>
                <Container maxWidth='xl'>
                    <Heading>Contact me</Heading>
                    <Grid container spacing={20}>
                        <Grid item lg={6} xs={12}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium' }} >Get in Touch</Typography>
                            <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                                corrupted. Doloribus quis soluta nesciunt veritatis vitae nobis?</Para>
                            <Stack direction='row' sx={{ my: 3 }}>
                                <CottageOutlinedIcon color='primary' sx={{ mx: 4 }} />
                                <Typography variant='subtitle1'>East Delhi, India</Typography>
                            </Stack>
                            <Stack direction='row' sx={{ my: 3 }}>
                                <CottageOutlinedIcon color='primary' sx={{ mx: 4 }} />
                                <Typography variant='subtitle1'>East Delhi, India</Typography>
                            </Stack>
                            <Stack direction='row' sx={{ my: 3 }}>
                                <CottageOutlinedIcon color='primary' sx={{ mx: 4 }} />
                                <Typography variant='subtitle1'>East Delhi, India</Typography>
                            </Stack>



                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium', mb: 2 }} >Message</Typography>

                            <Box component='form'>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} xs={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Name" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Subject" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Message" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Box>




                        </Grid>
                    </Grid>

                </Container>
            </Paper>
        </>
    )
}

export default Contact;


