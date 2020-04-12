import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ListSubheader from "@material-ui/core/ListSubheader";
import TimelapseIcon from "@material-ui/icons/Timelapse";

const styles = (theme) => ({
    title: {
        margin: theme.spacing(4, 0, 2),
    },
});

const ChallengeList = (props) => {
    const { challenges, onSelect, subHeader } = props;

    console.log('ChallengesList', challenges)

    const getChallengeDescription = (challengerID, creatorID) => {
        console.log('getting description', challengerID, creatorID)
        if (subHeader === "received")
            return `Challenge from ${creatorID}`
        return `Challenge for ${challengerID}`
    } 

    const getIcon = (state) => {
        switch (state) {
            case "pending":
                return <FiberNewIcon />;
            case "running":
                return <TimelapseIcon style={{ color: "#FFD700" }} />;
            case "completed":
                return <CheckCircleIcon style={{ color: "#00c400" }} />;
            default:
                return "Error occured";
        }
    };

    return (
        <List subheader={<ListSubheader>{subHeader}</ListSubheader>}>
            {challenges.map(({ id, challengerID, creatorID, state }) => (
                <Fragment key={id}>
                    <ListItem key={id} button onClick={() => onSelect()}>
                        <ListItemIcon> {getIcon(state)} </ListItemIcon>
                        <ListItemText> {getChallengeDescription(challengerID, creatorID)} </ListItemText>
                    </ListItem>
                    <Divider light />
                </Fragment>
            ))}
        </List>
    );
};

ChallengeList.propTypes = {
    challenges: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    subHeader: PropTypes.string.isRequired,
};

export default withStyles(styles)(ChallengeList);
