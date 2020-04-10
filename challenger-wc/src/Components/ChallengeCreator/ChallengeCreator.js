import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import { Header, Footer, Sidebar } from '../Shared/Layouts'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Fab from "@material-ui/core/Fab";
import ReadmeCreator from './ReadmeCreator'
import TestsCreator from './TestsCreator'
import ConfirmCreation from './ConfirmCreation'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from "@material-ui/icons/Add";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InviteChallengerForm from './InviteChallengerForm'
import theme from '../Theme'

const styles = {
    fabBackward: {
        position: "fixed",
        left: theme.drawerWidth+20,
        bottom: 20
    },
    fabForward: {
        position: "fixed",
        right: 20,
        bottom: 20
    },
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

const ChallengeCreator = (props) => {
    const { classes } = props;

    const [stage, setStage] = React.useState(0);
    const handleChange = s => {
        setStage(s);
    }

    const [open, toggle] = React.useState(false);
  
    const toggleModal = () => {
        toggle(!open);
    };

    const getBackButton = () => {
        if (stage === 0) return;
        return (
            <Fab className={classes.fabBackward} color="primary" onClick={() => {handleChange(stage-1)}}>
                <ArrowBackIcon />
            </Fab>
        );
    }

    const getForwardButton = () => {
        if (stage === 2) 
            return (
                <Fab className={classes.fabForward} color="primary" onClick={toggleModal}>
                    <AddIcon />
                </Fab>);
        return (
            <Fab className={classes.fabForward} color="primary" onClick={() => {handleChange(stage+1)}}>
                <ArrowForwardIcon />
            </Fab>
        );
    }

    const getConfirmationModal = () => {
        return (
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={toggleModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <InviteChallengerForm/>
            </Fade>
        </Modal>
        );
    }

    const getStage = () => {
        switch (stage) {
            case 0:
                return <ReadmeCreator/>;
            case 1:
                return <TestsCreator/>;
            case 2:
                return <ConfirmCreation/>;
            default:
                return <h1>Error</h1>;
        }
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
                        {getBackButton()}
                        {getStage()}
                        {getForwardButton()}
                        {getConfirmationModal()}
                        {getConfirmationModal()}
                    </main>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    )
}

ChallengeCreator.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChallengeCreator)
