import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import NewPost from './NewPost'
import ListPosts from './ListPosts'
import ViewPost from './ViewPost'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="ui container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                            <Route path='/' exact component={ListPosts} />
                            <Route path='/:category/:id' component={ViewPost} />
                            <Route path='/new' component={NewPost}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default connect()(App);
