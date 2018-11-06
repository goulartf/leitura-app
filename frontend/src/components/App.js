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
            <div className="App">
                <NavCategories />
                <ListPosts />
            </div>
        );
    }
}

export default connect()(App);
