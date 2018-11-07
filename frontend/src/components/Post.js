import React, {Component} from 'react';
import {connect} from 'react-redux'

class Post extends Component {

    render() {
        const {post} = this.props;
        const classScore = post.voteScore != 0 ? post.voteScore < 0 ? 'red' : 'green' : 'default';
        return (
            <React.Fragment>
                <div className="card" key={post.id}>
                    <div className="content">
                        <div className={"ui right ribbon label " + classScore }>
                            <a><i className="thumbs down icon"></i></a>
                            <a><i className="thumbs up icon"></i></a>
                            {post.voteScore}
                        </div>
                        <div className="header">
                            <img className="ui avatar image"
                                 src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"/> {post.author}
                            <br/>
                            {post.title}
                        </div>
                        <div className="meta">
                            <span className="right floated time">2 days ago</span>
                            <span className="category">{post.category}</span>
                        </div>
                        <div className="description">
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="right floated author">
                            <i className="comment icon"></i>{post.voteScore}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


function mapStateToProps({posts}, {id}) {

    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps)(Post);
