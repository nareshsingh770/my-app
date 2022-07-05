import { Grid, Paper, Typography, Button, Stack, Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Heading, { Para } from '../../styled component'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Skills = () => {
    const skills = { 'HTML': '95', 'CSS': '90', 'Javascript': '85', 'JQuery': '70', 'Bootstrap': '90', 'Material UI': '80', 'React Js': '80' }
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main,
        },
    }));
    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none' }}>
                <Container maxWidth='xl'>
                    <Heading>My Skills</Heading>
                    <Grid container spacing={15}>
                        <Grid item lg={6}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium' }} >My creative skills & experiences.</Typography>
                            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</Para>
                            <Button variant='outlined' size='large'>Read More</Button>
                        </Grid>
                        <Grid item lg={6}>
                            {
                                Object.entries(skills).map(skill => {
                                    return (
                                        <Box sx={{ my: 3 }}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center"><Typography>{skill[0]}</Typography><Typography>{skill[1]}%</Typography> </Stack>
                                            <BorderLinearProgress variant="determinate" value={skill[1]} />
                                        </Box>
                                    )
                                })
                            }


                            {/* <div className="skill">
                                <div className="name d-flex justify-content-between"><span>CSS</span><span>90%</span></div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name d-flex justify-content-between"><span>Javascript</span><span>80%</span></div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name d-flex justify-content-between"><span>JQuery</span><span>90%</span></div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name d-flex justify-content-between"><span>Bootstrap</span><span>90%</span></div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name d-flex justify-content-between"><span>React Js</span><span>80%</span></div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
                                </div>
                            </div> */}
                        </Grid>
                    </Grid>
                    <div className="row">


                    </div>
                </Container>
            </Paper>
        </>
    )
}

export default Skills
