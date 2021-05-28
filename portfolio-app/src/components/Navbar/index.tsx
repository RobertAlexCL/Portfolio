import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from '@material-ui/core';
import Logo from '../../resources/images/RCLogo2.png'

const useStyles = makeStyles((theme) => ({
    logo: {
        maxWidth: 160,
    },
    appbar: {
        flexGrow: 1,
        backgroundColor: '#007CC7'
    },
    buttonbar: {
        color: 'white',
    },
    buttonActive: {
        color: theme.palette.primary.main
    }
}))

const Navbar = () => {
    const classes = useStyles()
    const { push, location } = useHistory()

    return (<>
        <AppBar component={'nav'} position='static' className={classes.appbar}>
            <Toolbar>
                <Container>
                    <Grid container justify={'space-between'} alignItems={'center'}>
                        <Grid item>
                            <img src={Logo} alt='logo' className={classes.logo} />
                        </Grid>
                        <Grid item>
                            <Button className={clsx({
                                [classes.buttonbar]: true,
                                [classes.buttonActive]: location.pathname === '/'
                            })} onClick={() => push('/')}>Home</Button>
                            <Button className={clsx({
                                [classes.buttonbar]: true,
                                [classes.buttonActive]: location.pathname ==='/about'
                            })}  onClick={() => push('/about')}>About</Button>
                            <Button className={clsx({
                                [classes.buttonbar]: true,
                                [classes.buttonActive]: location.pathname ==='/projects'
                            })}  onClick={() => push('/projects')}>Projects</Button>
                            <Button className={clsx({
                                [classes.buttonbar]: true,
                                [classes.buttonActive]: location.pathname === '/contact'
                            })} onClick={() => push('/contact')}>Contact</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    </>)
}

export default Navbar