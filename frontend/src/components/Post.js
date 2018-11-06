import React, {Component} from 'react';
import {connect} from 'react-redux'

class Post extends Component {

    render() {
        const {post} = this.props;
        return (
            <div key={post.id}>
                <ul>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                    <li>{post.author}</li>
                    <li>{post.voteScore}</li>
                    <li>{post.category}</li>
                </ul>
                <br />
            </div>

        );
    }
}


function mapStateToProps({posts}, {id}) {

    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps)(Post);
