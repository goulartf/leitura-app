import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import ListComments from "./ListComments";
import FormPost from "./FormPost";

class EditPost extends Component {



    render() {
        const {id} = this.props.match.params;

        return (
            <div className="ui one column grid">
                <div className="column">
                    <FormPost id={id}/>
                </div>
            </div>
        );
    }
}

export default EditPost;
