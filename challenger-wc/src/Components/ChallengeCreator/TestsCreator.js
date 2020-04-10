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

const styles = {
    fab: {
        position: "fixed",
        right: 20,
        bottom: 20
    },
    Instructions: {
        backgroundColor: 'lightgray',
        height: '680px',
        overflow: 'auto',
        padding: '0px 25px 0px 25px'
    },
    CodeMirror: {
        height: 800,
        padding: '10px',
    },
    InstructionsPaper: {
        padding: '10px',
        minHeight: '600px',
    },
    assignmentTitle: {
        marginTop: '8px'
    },
}

function TestsCreator(props) {
    const { classes } = props;

    const [content, setContent] = React.useState('# README.md');
    const handleChange = c => {
        setContent(c);
    }

    return (
        <Grid container spacing={3}>
                            {/* Code Editor */}
                            <Grid item lg={12} md={12} xs={12}>
                                <Paper className={classes.CodeMirror}>
                                    <AppBar position="relative" color="default">
                                        <Toolbar>
                                            <Grid container>
                                                <Typography variant={'h6'} color={'textSecondary'}>
                                                        Tests.java
                                                </Typography>                                      
                                            </Grid>
                                        </Toolbar>
                                    </AppBar>
                                    <Editor mode='javascript' value={'console.log("Some tests")'} handleChange={handleChange}/>
                                </Paper>
                            </Grid>
                        </Grid>
    )
}

TestsCreator.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TestsCreator)
