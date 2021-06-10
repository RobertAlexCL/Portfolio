import React from 'react';
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import attendance from '../../resources/images/attendance.jpg'
import footlab from '../../resources/images/footlab.jpg'
import silmarillion from '../../resources/images/silmarillion.jpg'
import tmobile from '../../resources/images/tmobile.jpg'
import video from '../../resources/images/video.jpg'
import zonagourmet from '../../resources/images/zonagourmet.jpg'

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
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}))

const Projects = () => {
    const classes = useStyles()
    return (<>
        <Navbar />
        <Container maxWidth={false}>
            <Grid container direction='row' spacing={2} alignItems={'center'} justify={'center'} >
                <Grid item xs={12} sm={6}>
                    <Typography variant='h1' className={classes.title}>Projects</Typography>
                    <Typography variant='body1' className={classes.title2}>Here are some projects i actually made for college, clients or myself</Typography>
                </Grid>
            </Grid>
            <Grid container direction='row' spacing={2} alignItems={'center'} justify={'center'}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <Link target='_blank' to='https://attendance-app8b.web.app/' />
                        <CardActionArea target='_blank' href='https://attendance-app8b.web.app/'>
                            <CardMedia
                                className={classes.media}
                                image={attendance}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Attendance App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Attendance application carried out in a freelance exercise in the web systems and technologies class taught at the Universidad del Valle de Guatemala.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                For this application React with Typescript was used.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link target='_blank' to='https://github.com/RobertAlexCL/AttendandeApp' />
                            <Button size="small" color="primary" target='_blank' href='https://github.com/RobertAlexCL/AttendandeApp'>
                                Source Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <Link target='_blank' to='https://footlab.web.app/' />
                        <CardActionArea target='_blank' href='https://footlab.web.app/'>
                            <CardMedia
                                className={classes.media}
                                image={footlab}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Footlab
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Frontend made for the footlab podiatry clinic located in Madrid, it was worked for the Space Time Analytics company.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                For this application React with Typescript was used.
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" variant='outlined' disabled>
                                Private Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <Link target='_blank' to='https://silmarillion.web.app/' />
                        <CardActionArea target='_blank' href='https://silmarillion.web.app/'>
                            <CardMedia
                                className={classes.media}
                                image={silmarillion}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Silmarillion summary
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Html exercise carried out for the web systems and technologies class at the Universidad del Valle de Guatemala. It´s a summary of the Silmarillion, written by JRR Tolkien.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Only html was used for this application.
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link target='_blank' to='https://github.com/RobertAlexCL/Sistemas-y-Tecnologias-Web/tree/main/Laboratorios/Lab03' />
                            <Button size="small" color="primary" target='_blank' href='https://github.com/RobertAlexCL/Sistemas-y-Tecnologias-Web/tree/main/Laboratorios/Lab03'>
                                Source Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <Link target='_blank' to='https://project0.web.app/' />
                        <CardActionArea target='_blank' href='https://project0.web.app/'>
                            <CardMedia
                                className={classes.media}
                                image={tmobile}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    T-Mobile clone
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                A clone of T-Mobile home page made for the first project of the web technologies and systems class at the Universidad del Valle de Guatemala.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                React js was used for this application.
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link target='_blank' to='https://github.com/RobertAlexCL/T-Mobile-Clone' />
                            <Button size="small" color="primary" target='_blank' href='https://github.com/RobertAlexCL/T-Mobile-Clone'>
                                Source Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <Link target='_blank' to='https://project02.web.app/' />
                        <CardActionArea target='_blank' href='https://project02.web.app/'>
                            <CardMedia
                                className={classes.media}
                                image={video}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video Call
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                A video call app made as a second project for the class of systems and web technologies at the Universidad del Valle de Guatemala, is also serving me as part of development in another project. I'll be updating it while I make other nuances.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                React with Typescript and Vonage Video API was used for this application.
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link target='_blank' to='https://github.com/RobertAlexCL/Web-Project-2/tree/main/web-project2-app' />
                            <Button size="small" color="primary" target='_blank' href='https://github.com/RobertAlexCL/Web-Project-2/tree/main/web-project2-app'>
                                Source Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <Link target='_blank' to='https://zonagourmet.com.gt/' />
                        <CardActionArea target='_blank' href='https://zonagourmet.com.gt/'>
                            <CardMedia
                                className={classes.media}
                                image={zonagourmet}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Zona Gourmet
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Website made for the catering company located in Guatemala City, I have special affection for this project since it was my first job done for a company.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                As it was my first job without having a lot of knowledge about web technologies, I did this project with WordPress.
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" variant='outlined' disabled>
                                Private Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </>)
}
export default Projects