import React from 'react';
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const About = () => {
    const classes = useStyles()
    return (<>
        <Navbar />
        <Container maxWidth={false}>
            <Grid container direction='column' spacing={2} alignItems={'center'} justify={'center'} >
                <Grid item xs={12} sm={6}>
                    <Typography variant='h1' className={classes.title}>About Me</Typography>
                    <Typography variant='body1' className={classes.title2}>Hello, my name is Roberto Castillo and I´m a Software Developer with great passion in web development.</Typography>
                    <Typography variant='body1' className={classes.title2}>I'm actually a third year student at Universidad de Valle de Guatemala pursuing a degree in computer science engineering. I developed many web-based projects for University tasks and others for personal projects and companies. I love learning new and different ways to create better user experiences with good looking and responsive pages.</Typography>
                    <Typography variant='body1' className={classes.title2}>My main goal as a lover of computer science is to give a great service to the world that i can by transforming requests from the people with whom I work to beautiful software. </Typography>
                    <Typography variant='body1' className={classes.title2}>I like to say that one of the reasons why computer science and software development is beautiful is because you always have to be learning, whether in the branch where you currently work or when you enter a completely different branch.</Typography>
                    <Typography variant='body1' className={classes.title2}>My work philosophy is that I have to be in good physical condition and eat healthy so that my brain works optimally and my body can withstand hours of hard work in the front of a screen.</Typography>
                    <Typography variant='body1' className={classes.title2}>When I'm not working, I like being able to have time with my family, watch movies or hangout with friends.</Typography>
                </Grid>
            </Grid>
        </Container>
    </>)
}

export default About