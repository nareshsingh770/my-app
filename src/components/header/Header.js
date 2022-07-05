import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ColorsTheme from './ColorsTheme';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {
    const pages = { 'Home': '/', 'Projects': '/projects', 'Users': '/users-data', 'Sign Up': '/sign-up' };
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorSideMenu, handleOpenSideMenu] = useState(null)
    const [anchorMenuUser, handleOpenUserMenu] = useState(null)


    const applyColorTheme = (e) => {



        localStorage.setItem('theme-color', e.target.style.backgroundColor);

        document.querySelector(':root').style.setProperty('--bs-danger', e.target.style.backgroundColor);

    }

    useEffect(() => {

        const colorSetted = localStorage.getItem('theme-color');

        if (colorSetted) {
            document.querySelector(':root').style.setProperty('--bs-danger', colorSetted);
        }


    })
    return (
        <>
            <AppBar position="fixed" color="primary" sx={{ height: { lg: '70px' } }}>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={(e) => handleOpenSideMenu(e.currentTarget)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorSideMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                open={Boolean(anchorSideMenu)}
                                onClose={() => handleOpenSideMenu(null)}
                            >

                                {
                                    Object.entries(pages).map((page) => {
                                        return (
                                            <NavLink to={page[1]} onClick={() => handleOpenSideMenu(null)}>
                                                <Button
                                                    sx={{ my: 2, mx: 4, color: '#000', display: 'block' }}
                                                >
                                                    {page[0]}
                                                </Button>
                                            </NavLink>
                                        )
                                    })
                                }
                                {/* <MenuItem >
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem >
                                    <Typography textAlign="center">Projects</Typography>
                                </MenuItem>
                                <MenuItem >
                                    <Typography textAlign="center">Users</Typography>
                                </MenuItem> */}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mr: 4 }}>
                            <Box sx={{ display: 'flex' }}>
                                {
                                    Object.entries(pages).map((page) => {
                                        return (
                                            <NavLink to={page[1]}>
                                                <Button
                                                    sx={{ my: 2, mx: 4, color: 'white', display: 'block' }}
                                                >
                                                    {page[0]}
                                                </Button>
                                            </NavLink>
                                        )
                                    })
                                }
                            </Box>
                            <ColorsTheme changeColor={applyColorTheme} />
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={(e) => handleOpenUserMenu(e.currentTarget)} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                anchorEl={anchorMenuUser}
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorMenuUser)}
                                onClose={() => handleOpenUserMenu(null)}
                            >
                                {settings.map((setMenu, index) => (
                                    <MenuItem key={index} onClick={() => handleOpenUserMenu(null)}>
                                        <Typography textAlign="center">{setMenu}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Header
