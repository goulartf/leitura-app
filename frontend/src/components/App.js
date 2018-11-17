import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData, loaderShow} from '../actions/shared'
import ListPosts from './ListPosts'
import ViewPost from './ViewPost'
import EditPost from "./EditPost";
import AddPost from "./AddPost";
import NavCategories from "./NavCategories";
import Page404 from "./Page404";

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="ui container">
                        <br/>
                        <br/>
                        <div className="ui grid">
                            <div className="three wide column"></div>
                            <div className="ten wide column">
                                <NavLink to='/'>
                                    <h2 className="ui icon center aligned header">
                                        READABLE
                                    </h2>
                                </NavLink>
                                <NavCategories/>
                            </div>
                        </div>
                        <br/>
                        <br/>

                        <div>
                            <Switch>
                                <Route path='/' exact component={ListPosts}/>
                                <Route path='/new' exact component={AddPost}/>
                                <Route path='/404' exact component={Page404}/>
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
                    <div className="ui vertical footer segment">
                        <div className="ui container">
                            <div className="ui divided equal height stackable grid">
                                <div className="sixteen wide column">
                                    <h4 className="ui center aligned header">UDACITY PROJECT</h4>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default connect()(App);
