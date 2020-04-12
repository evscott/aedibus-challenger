import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'

class LandingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            signUp: false,
        }

        this.toggleSignUp = this.toggleSignUp.bind(this)
    }

    toggleSignUp = () => {
        this.setState({ signUp: !this.state.signUp })
    }

    render() {
        // if (this.props.isAuthenticated && !this.props.isFetching)
        //     return <Redirect to="/home"/>;

        if (this.state.signUp)
            return <SignUp toggleSignUp={this.toggleSignUp} handleSignUp={this.props.handleSignUp}/>
        else return <SignIn toggleSignUp={this.toggleSignUp} handleSignIn={this.props.handleSignIn} />
    }
}

LandingPage.propTypes = {
    handleSignUp: PropTypes.func.isRequired,
    handleSignIn: PropTypes.func.isRequired,
}

export default (LandingPage)
