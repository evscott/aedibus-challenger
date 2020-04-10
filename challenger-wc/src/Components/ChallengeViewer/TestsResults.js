import React, { Fragment }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Divider from '@material-ui/core/Divider'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: '730px',
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }));

const TestResults = (props) => {
    const classes = useStyles()
    const { tests } = props

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const getSubheader = () => {
        return (
            <Grid container>
                <Grid item xs={10} md={10} lg={10}>
                    <ListSubheader>
                        Tests passed: 2/3
                    </ListSubheader>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                    <ListSubheader>
                        Runtime: 0.81s
                    </ListSubheader>
                </Grid>
            </Grid>
        )
    }

    const getListItem = (name, time, failure, message) => {
        if (failure)
            return (
                <Fragment>
                    <ListItem button onClick={handleClick}>
                    <ListItemIcon style={{ color: '#E50000' }}>
                        <ErrorOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={name + ' - ' + time + 's'} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText secondary={message} />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider light/>
                </Fragment>
            )
        return (
            <Fragment>
                <ListItem key={name} button onClick={() => {}}>
                    <ListItemIcon style={{ color: '#00c400' }}>
                        <CheckCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={name + ' - ' + time + 's'} />
                </ListItem>
                <Divider light/>
            </Fragment>
        );
    };

    return (
        <List subheader={getSubheader()} className={classes.root}>
            {tests.map(({ name, time, failure, message }) => (
                        getListItem(name, time, failure, message)
            ))}
        </List>
    );
}

