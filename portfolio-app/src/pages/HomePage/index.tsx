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
        color: '#007CC7'
    },
    title2: {
        color: '#4DA8DA',
        padding: theme.spacing(2)
    },
    bodycolor: {
        color: '#203647',
        padding: theme.spacing(4)
    },
    background: {
        background: '#3C1874',
        height: '81vh'
    },
    buttonbar: {
        color: '#932432',
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
                    <Typography variant='h2' className={classes.title2}>I'm a Software Developer</Typography>
                    <Typography variant='body1' className={classes.title2}>I have many skills, like React development in Typescript and backend managment in Firebase Cloud Functions</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant='outlined' onClick={() => push('./contact')} color='primary'>
                        Contact Me 
                    </Button>
                </ Grid>
            </Grid>
        </Container>
    </>)
}

export default HomePage