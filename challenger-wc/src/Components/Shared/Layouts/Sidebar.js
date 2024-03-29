import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CreateIcon from '@material-ui/icons/Create'
import ListIcon from '@material-ui/icons/List';
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'

export const Categories = [
    {
        id: 'Directory',
        children: [
            { id: 'View Challenges', icon: <ListIcon />, to: '/home' },
            { id: 'Create Challenge', icon: <CreateIcon />, to: '/challenge/create' },
        ],
    },
]

const styles = theme => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
})

function Sidebar(props) {
    const { classes, ...other } = props
    const history = useHistory()

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem
                    className={clsx(
                        classes.firebase,
                        classes.item,
                        classes.itemCategory
                    )}
                >
                    <Typography variant={'h5'}>
                        Aedibus
                    </Typography>
                    <Typography variant={'body2'}>
                       challenger
                    </Typography>
                </ListItem>
                {Categories.map(({ id, children }) => (
                    <React.Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}
                            >
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, to, active }) => (
                            <ListItem
                                key={childId}
                                to={to}
                                button
                                className={clsx(
                                    classes.item,
                                    active && classes.itemActiveItem
                                )}
                                onClick={() => history.push(to)}
                            >
                                <ListItemIcon className={classes.itemIcon}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    {childId}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    )
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar)
