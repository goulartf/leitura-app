import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData, loaderShow} from '../actions/shared'

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData())
    }

    render() {
        return (
            <div className="masthead error segment">
                <div className="container">
                    <h1 className="ui dividing header">
                        That happens not to be a post
                    </h1>
                    <p>Rewind and try another one</p>
                </div>
            </div>
        )
    }
}

export default connect()(App);
