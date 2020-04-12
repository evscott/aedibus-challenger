import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import ChallengeList from "./ChallengesList";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: "auto",
        overflow: "hidden",
    },
    searchBar: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: "block",
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: "16px 16px",
    },
    typoHeading: {
        paddingLeft: "10px",
    },
});

const ChallengesCard = (props) => {
    const { classes, received, sent } = props;

    console.log('ChallengesCard', received, sent)

    const history = useHistory();

    const onSelect = () => {
        history.push("/challenge");
    };

    const getReceivedChallenges = () => {
        if (received)
            return (
                <ChallengeList
                    challenges={received}
                    onSelect={onSelect}
                    subHeader={"received"}
                />
            );
    }

    const getSentChallenges = () => {
        if (sent)
            return (
                <ChallengeList
                    challenges={sent}
                    onSelect={onSelect}
                    subHeader={"sent"}
                />
            );
    }


    return (
        <Paper className={classes.paper}>
            <AppBar
                className={classes.searchBar}
                position="static"
                color="default"
                elevation={0}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={11} md={11} lg={11}>
                            <Typography variant={"h6"} color={"textSecondary"}>
                                Challenges
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon
                                        className={classes.block}
                                        color="inherit"
                                    />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    className={classes.contentWrapper}
                >
                    {getReceivedChallenges()}
                    {getSentChallenges()}
                </Grid>
            </Grid>
        </Paper>
    );
};

ChallengesCard.propTypes = {
    received: PropTypes.array.isRequired,
    sent: PropTypes.array.isRequired,
};

export default withStyles(styles)(ChallengesCard);
