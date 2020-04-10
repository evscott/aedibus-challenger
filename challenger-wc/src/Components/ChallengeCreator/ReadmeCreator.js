import React from 'react'
import PropTypes from 'prop-types'
import {
    withStyles,
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Editor from '../Shared/Editor/Editor'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'react-markdown'

const styles = {
    fab: {
        position: "fixed",
        right: 20,
        bottom: 20
    },
    Instructions: {
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
    assignmentTitle: {
        marginTop: '8px'
    },
}

function ReadmeCreator(props) {
    const { classes } = props;

    const [content, setContent] = React.useState('# Some instructions');
    const handleChange = c => {
        setContent(c);
    }

    return (
        <Grid container spacing={3}>
                            {/* Code Editor */}
                            <Grid item lg={6} md={12} xs={12}>
                                <Paper className={classes.CodeMirror}>
                                    <AppBar position="relative" color="default">
                                        <Toolbar>
                                            <Grid container>
                                                <Typography variant={'h6'} color={'textSecondary'}>
                                                        README.md
                                                </Typography>                                      
                                            </Grid>
                                        </Toolbar>
                                    </AppBar>
                                    <Editor mode='markdown' value={content} handleChange={handleChange}/>
                                </Paper>
                            </Grid>
                            <Grid item lg={6} md={12} xs={12}>
                                <Paper className={classes.InstructionsPaper}>
                                    <AppBar position="relative" color="default">
                                        <Toolbar>
                                            <Typography variant={'h6'} color={'textSecondary'}>
                                                README.md
                                            </Typography>
                                        </Toolbar>
                                    </AppBar>
                                    <ReactMarkdown source={content} className={classes.Instructions}/>
                                </Paper>
                            </Grid>
                        </Grid>
    )
}

ReadmeCreator.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReadmeCreator)
