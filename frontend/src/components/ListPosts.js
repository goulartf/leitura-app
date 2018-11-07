import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';

class ListPosts extends Component {

    render() {
        const {posts} = this.props;
        return (
            <div className="ui two stackable cards">
                {this.props.postsIds.map((id) => (
                    <Post id={id} key={id} />
                ))}
            </div>
        );
    }
}


function mapStateToProps({posts}) {

    return {
        postsIds: Object.keys(posts)
            .sort((a, b) => posts[b].timestamp - posts[a].timestamp)
    }
}

export default connect(mapStateToProps)(ListPosts);
