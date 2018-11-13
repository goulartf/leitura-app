import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import ListPosts from './ListPosts'
import ViewPost from './ViewPost'
import EditPost from "./EditPost";
import AddPost from "./AddPost";

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
                            <Switch>
                                <Route path='/' exact component={ListPosts}/>
                                <Route path='/new' exact component={AddPost}/>
                                <Route path='/:category' exact component={ListPosts}/>
                                <Route path='/:category/:id' exact component={ViewPost}/>
                                <Route path='/post/edit/:id' exact component={EditPost}/>
                            </Switch>
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
