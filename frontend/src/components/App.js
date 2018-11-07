import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import ListPosts from './ListPosts'
import NavCategories from './NavCategories'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div className="ui container">
                <br />
                <br />
                <br />
                <br />
                <h1 className="ui header center">READABLE</h1>

                <div className="ui grid">
                    <div className="four wide column">
                        <NavCategories/>
                    </div>
                    <div className="twelve wide column">
                        <ListPosts/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(App);
