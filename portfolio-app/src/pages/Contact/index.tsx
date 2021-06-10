import React from 'react';
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttonActive: {
        color: theme.palette.primary.main
    },
    title: {
        color: theme.palette.primary.main,
        padding: theme.spacing(4)
    },
    title2: {
        color: theme.palette.primary.dark,
        padding: theme.spacing(2)
    }
}))

const Contact = () => {
    const classes = useStyles()
    return(<>
    <Navbar />
    <Container maxWidth={false}>
            <Grid container direction='column' spacing={2} alignItems={'center'} justify={'center'} >
                <Grid item xs={12} sm={6}>
                    <Typography variant='h1' className={classes.title}>Contact Me</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography variant='body1' className={classes.title2}>My inbox is always open, feel free to contact me.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Link target='_blank' to='mailto:cas18546@uvg.edu.gt' />
                    <Button variant='outlined' color='secondary' target='_blank' href='mailto:cas18546@uvg.edu.gt'>
                        cas18546@uvg.edu.gt
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </>)
}

export default Contact