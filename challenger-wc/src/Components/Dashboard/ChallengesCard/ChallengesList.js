import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import FiberNewIcon from '@material-ui/icons/FiberNew';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListSubheader from '@material-ui/core/ListSubheader';
import TimelapseIcon from '@material-ui/icons/Timelapse';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}))

export default props => {
    const classes = useStyles()
    const { challenges, onSelect, subHeader } = props

    const getIcon = (state) => {
        switch(state) {
            case 'pending':
                    return <FiberNewIcon style={{ color: '#0000FF' }}/>;
                break;
            case 'running':
                    return <TimelapseIcon style={{ color: '#FFD700' }}/>;
                break;
            case 'completed':
                    return <CheckCircleIcon style={{ color: '#00c400' }}/>;
                break;
            default:
                return "Error occured"
        }
    }

    return (
        <List subheader={
            <ListSubheader>
              {subHeader}
            </ListSubheader>
          }>
            {challenges.map(({ id, name, state }) => (
                        <Fragment key={id}>
                            <ListItem key={id} button onClick={() => onSelect(name)}>
                                <ListItemIcon className={classes.itemIcon}>
                                    {getIcon(state)}
                                </ListItemIcon>
                                <ListItemText>{name}</ListItemText>
                            </ListItem>
                            <Divider light/>
                        </Fragment>
                    ))}
        </List>
    )
}
