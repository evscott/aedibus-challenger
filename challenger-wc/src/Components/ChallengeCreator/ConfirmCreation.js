import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Editor from "../Shared/Editor/Editor";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";

const styles = {
    instructions: {
        backgroundColor: "lightgray",
        height: "730px",
        overflow: "auto",
        padding: "0px 25px 0px 25px",
    },
    leftPaper: {
        height: "800px",
        padding: "10px",
    },
    rightPaper: {
        padding: "10px",
        height: "800px",
    },
};

const ConfirmCreation = (props) => {
    const { classes } = props;

    const [content, setContent] = React.useState("# Some instructions");
    const handleChange = (c) => {
        setContent(c);
    };

    const getLeftAppbar = () => {
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

    const getRightAppbar = () => {
        return (
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Typography variant={"h6"} color={"textSecondary"}>
                        README.md
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    };

    return (
        <Grid container spacing={3}>
            <Grid item lg={6} md={12} xs={12}>
                <Paper className={classes.leftPaper}>
                    {getLeftAppbar()}
                    <Editor
                        mode="javascript"
                        value={'console.log("Some tests")'}
                        handleChange={handleChange}
                    />
                </Paper>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
                <Paper className={classes.rightPaper}>
                    {getRightAppbar()}
                    <ReactMarkdown
                        source={content}
                        className={classes.instructions}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

ConfirmCreation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmCreation);
