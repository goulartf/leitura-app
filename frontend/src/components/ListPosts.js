import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';

class ListPosts extends Component {

    render() {
        const {posts} = this.props;
        return (
            <div>
                Posts:
                <ol>
                    {this.props.postsIds.map((id) => (
                        <li>
                            <Post id={id}/>
                        </li>
                    ))}
                </ol>
                {/*this.props.posts.map((post) => (
                    <div key={post.id}>
                        <ol>
                            <li>{post.title}</li>
                            <li>{post.body}</li>
                            <li>{post.author}</li>
                            <li>{post.voteScore}</li>
                            <li>{post.category}</li>
                        </ol>
                    </div>
                )) */}
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
