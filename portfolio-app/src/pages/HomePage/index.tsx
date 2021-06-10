import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    buttonActive: {
        color: theme.palette.primary.main
    },
    title: {
        color: theme.palette.primary.main
    },
    title2: {
        color: theme.palette.primary.light,
        padding: theme.spacing(2)
    },
    bodycolor: {
        color: theme.palette.primary.dark,
        padding: theme.spacing(4)
    }
}))

const HomePage = () => {
    const classes = useStyles()
    const { push } = useHistory()
    return (<>
        <Navbar />
        <Container maxWidth={false}>
            <Grid container direction='column' spacing={2} alignItems={'center'} justify={'center'} >
                <Grid item xs={12} sm={6}>
                    <Typography variant='body1' className={classes.bodycolor}>Hi, my name is</Typography>
                    <Typography variant='h1' className={classes.title}>Roberto Castillo</Typography>
                    <Typography variant='h2' className={classes.title2}>I'm a Frontend Web Developer</Typography>
                    <Typography variant='body1' className={classes.title2}>I have many skills, like React development in Typescript and also have knowledge in backend managment with Firebase Cloud Functions</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant='outlined' onClick={() => push('./contact')} color='secondary'>
                        Contact Me 
                    </Button>
                </ Grid>
            </Grid>
        </Container>
    </>)
}

export default HomePage