import React from 'react'
import PropTypes from 'prop-types'
import {
    createMuiTheme,
    ThemeProvider,
    withStyles,
} from '@material-ui/core/styles'
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
import Instructions from './Instructions'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
})

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
}

const drawerWidth = 256

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
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
    CodeMirror: {
        height: 800,
        padding: '10px',
    },
    InstructionsPaper: {
        padding: '10px',
        height: '800px',
    },
    button: {
        margin: theme.spacing(1),
        right: '0px',
        bottom: '0px'
    },
    assignmentTitle: {
        marginTop: '8px'
    },
    createTab: {
        marginTop: '8px'
    },
    buttons: {
        marginTop: '8px'
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

function ChallengeViewer(props) {
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
        return <Instructions/>
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
                {/* Sidebar Navigation */}
                <nav className={classes.drawer}>
                    <Hidden xsDown implementation="css">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                        />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header />
                    {/* Assignment Contents */}
                    <main className={classes.main}>
                        <Grid container spacing={3}>
                            {/* Code Editor */}
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
