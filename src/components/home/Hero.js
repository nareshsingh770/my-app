import { Box, Container, Typography, Button } from '@mui/material'
import React, { useContext } from 'react'
import { ModalOpen } from '../../context/Context'

const Hero = () => {
    const [modalState, setModal] = useContext(ModalOpen)
    return (
        <><Box className="hero-section">
            <Container maxWidth="xl">
                <div className="text-heading">
                    <Typography variant='h3' className="text-1">Hello, My Name is</Typography>
                    <Typography variant='h3' className="text-2">John Doe</Typography>
                    <Typography variant='h3' className="text-3">And I am a <span>Developer</span><span className="cursor">|</span></Typography>
                    <Button type="button" variant='contained' >Hire me</Button>
                </div>
            </Container>
        </Box>
        </>
    )
}

export default Hero
