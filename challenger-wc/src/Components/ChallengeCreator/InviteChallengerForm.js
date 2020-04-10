import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import Fab from "@material-ui/core/Fab";
import { useHistory } from 'react-router-dom'

const styles = {
    paper: {
        backgroundColor: '#E5E5E5',
        border: '2px solid #000',
        width: '550px',
        height: '180',
    },
    fab: {
        position: "relative",
        left: 470,
        bottom: 20
    },
}

const InviteChallengerForm = (props) => {
    const { classes } = props;
    const history = useHistory()

    const onSelect = () => {
        history.push('/challenge')
    }

    return (
        <div className={classes.paper}>
            <Grid container>
                <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={10} md={10} lg={10}>
                    <h1> Confirm your creation </h1>
                </Grid>
                <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={10} md={10} lg={10}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="input-with-icon-adornment">Invite a challenger</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={1} md={1} lg={1}/>
            </Grid>
            <Fab className={classes.fab} color="primary" onClick={() => {onSelect()}}>
                <SendIcon />
            </Fab>
        </div>
    )
}

InviteChallengerForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InviteChallengerForm)
