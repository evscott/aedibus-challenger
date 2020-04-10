import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Editor from "../Shared/Editor/Editor";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
    CodeMirror: {
        height: 800,
        padding: "10px",
    },
};

function TestsCreator(props) {
    const { classes } = props

    const [content, setContent] = React.useState("# README.md");
    const handleChange = (c) => {
        setContent(c);
    };

    const getAppbar = () => {
        return (
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Grid container>
                        <Typography variant={"h6"} color={"textSecondary"}>
                            Tests.java
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    };

    return (
        <Grid container spacing={3}>
            {/* Code Editor */}
            <Grid item lg={12} md={12} xs={12}>
                <Paper className={classes.CodeMirror}>
                    {getAppbar()}
                    <Editor
                        mode="javascript"
                        value={'console.log("Some tests")'}
                        handleChange={handleChange}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
}

TestsCreator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestsCreator);
