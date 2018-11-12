import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import ListComments from "./ListComments";

class ViewPost extends Component {

    render() {

        const {post} = this.props;

        return (
            <React.Fragment>

                <div className="ui grid">
                    <div className="sixteen wide column">

                        {post && post.id && (
                            <Post id={post.id} key={post.id}/>
                        )}

                    </div>
                </div>

                {post && post.id && (
                    <ListComments post={post}/>
                )}

            </React.Fragment>
        );
    }
}


function mapStateToProps({posts}, props) {
    const {id} = props.match.params;
    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps)(ViewPost);
