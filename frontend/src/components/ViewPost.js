import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import ListComments from "./ListComments";
import PostViewPlaceholder from "./PostModeView/PostViewPlaceholder";
import {Redirect} from "react-router-dom";

class ViewPost extends Component {

    render() {

        const {post, loader} = this.props;

        if (loader && !loader.show && post == null) {
            return <Redirect to="/404"/>
        }

        return (
            <React.Fragment>

                <div className="ui grid">
                    <div className="sixteen wide column">

                        {loader && loader.show && (
                            <PostViewPlaceholder/>
                        )}

                        {loader && !loader.show && (
                            <Post id={post.id} key={post.id} modeView="view"/>
                        )}

                    </div>
                </div>

                <ListComments post={post}/>


            </React.Fragment>
        );
    }
}


function mapStateToProps({posts, loader}, props) {
    const {id} = props.match.params;
    return {
        loader,
        post: posts[id] ? posts[id] : null
    }
}

export default connect(mapStateToProps)(ViewPost);
