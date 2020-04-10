import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import { Header, Footer, Sidebar } from '../Shared/Layouts'
import Paper from '@material-ui/core/Paper'
import Editor from '../Shared/Editor/Editor'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send';
import Fab from "@material-ui/core/Fab";
import TestResults from './TestsResults'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import theme from '../Theme'
import ReactMarkdown from 'react-markdown'

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: theme.drawerWidth,
            flexShrink: 0,
        },
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
    instructions: {
        backgroundColor: 'lightgray',
        height: '730px',
        overflow: 'auto',
        padding: '0px 25px 0px 25px'
    },
    CodeMirror: {
        height: 800,
        padding: '10px',
    },
    InstructionsPaper: {
        padding: '10px',
        height: '800px',
    },
    fab: {
        position: "fixed",
        right: 20,
        bottom: 20
    },
}

const tests = [
    {
        name: 'Test one',
        time: 0.3,
        failure: false,
        message: '',
    },
    {
        name: 'Challenge two',
        time: 0.5,
        failure: true,
        message: 'A descriptive message about this utter failure',
    },
    {
        name: 'Challenge three',
        time: 0.01,
        failure: false,
        message: 'Challenge one',
    },
]

const ChallengeViewer = (props) => {
    const { classes } = props

    const [focusResults, toggleFocus] = React.useState(0);
    const toggleFocusResults = (event, newValue) => {
        toggleFocus(newValue);
    }

    const getLeftAppbar = () => {
        return (
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Typography variant={'h6'} color={'textSecondary'}>
                        Attempt.java
                    </Typography> 
                </Toolbar>
            </AppBar>
        )
    }

    const getRightAppbar = () => {
        return (
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Tabs
                        value={focusResults}
                        onChange={toggleFocusResults}
                        indicatorColor="primary"
                        textColor="primary"
                        >
                        <Tab label="README.md" />
                        <Tab label="Tests" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        );
    }

    const getRightContent = () => {
        if (focusResults)
            return <TestResults tests={tests} />
        return  <ReactMarkdown source={'# Instructions go here'} className={classes.instructions}/>

    }

    const getButton = () => {
        if(true)
            return (
                <Fab className={classes.fab} color="primary" onClick={() => {}}>
                    <SendIcon />
                </Fab>
            );
        return (
            <Fab className={classes.fab} color="primary" onClick={() => {}}>
                <DeleteOutlineIcon />
            </Fab>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <nav className={classes.drawer}>
                    <Hidden xsDown implementation="css">
                        <Sidebar
                            PaperProps={{ style: { width: theme.drawerWidth } }}
                        />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header />
                    <main className={classes.main}>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={12} xs={12}>
                                <Paper className={classes.CodeMirror}>
                                    {getLeftAppbar()}
                                    <Editor mode={'javascript'} value={'const main = () => console.log("Hello!");'} />
                                </Paper>
                            </Grid>
                            <Grid item lg={6} md={12} xs={12}>
                                <Paper className={classes.InstructionsPaper}>
                                    {getRightAppbar()}
                                    {getRightContent()}
                                </Paper>
                            </Grid>
                        </Grid>
                        {getButton()}
                    </main>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    )
}

ChallengeViewer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChallengeViewer)
