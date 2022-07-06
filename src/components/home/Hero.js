import { Box, Container, Typography, Button, Paper } from '@mui/material'
import backgroundImg from '../../Assets/Background.png';

const Hero = () => {
    return (
        <><Paper className="hero-section" sx={{ boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Box className="text-heading">
                    <Typography variant='h3' className="text-1">Hello, My Name is</Typography>
                    <Typography variant='h3' className="text-2">John Doe</Typography>
                    <Typography variant='h3' className="text-3">And I am a <span>Developer</span><span className="cursor">|</span></Typography>
                    <Button type="button" variant='contained' color="primary" >Hire me</Button>
                </Box>
                <img src={backgroundImg} className='hero-image' alt='hero-image' />
            </Container>
        </Paper>
        </>
    )
}

export default Hero
