import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import ChallengesCard from './ChallengesCard'
import { Header, Footer, Sidebar } from '../Shared/Layouts'
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { useHistory } from 'react-router-dom'
import theme from '../Theme'

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#eaeff1',
    },
    fab: {
        position: "fixed",
        right: 20,
        bottom: 20
      },
}

function Dashboard(props) {
    const { classes } = props
    const history = useHistory()

    const onSelect = () => {
        history.push('/challenge/create')
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <nav>
                    <Hidden xsDown implementation="css">
                        <Sidebar
                            PaperProps={{ style: { width: theme.drawerWidth } }}
                        />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header/>
                    <main className={classes.main}>
                        <Grid container>
                            <Grid item lg={3} md={4} xs={1}/>
                            <Grid item lg={6} md={6} xs={10}>
                                <ChallengesCard/>
                            </Grid>
                            <Grid item lg={3} md={2} xs={1}/>
                        </Grid>
                        <Fab className={classes.fab} color="primary" onClick={onSelect}>
                            <AddIcon />
                        </Fab>
                    </main>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
