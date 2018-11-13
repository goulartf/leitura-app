import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
import {handleAddPost} from '../actions/posts'
import FormPost from "./FormPost";

export default class AddPost extends Component {

    render() {

        return (
            <div className="ui one column grid">
                <div className="column">
                    <FormPost />
                </div>
            </div>
        );

    }
}
