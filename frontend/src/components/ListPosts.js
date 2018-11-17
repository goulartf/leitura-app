import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import {Link} from "react-router-dom";
import NavCategories from "./NavCategories";
import {handleReceivePost, handleReceivePostByCategory,handleOrderBy,orderPost} from "../actions/posts";
import PostListPlaceholder from "./PostModeView/PostListPlaceholder";

class ListPosts extends Component {

    state = {
        sortDate: 'ASC',
        sortDateActive: false,
        sortVote: 'ASC',
        sortVoteActive: false,
    }

    handleOrderByDate = (e) => {

        const {sortDate} = this.state;
        const {dispatch} = this.props;

        dispatch(handleOrderBy('timestamp', sortDate));

        this.setState((state) => {
            return {
                sortDate: state.sortDate === "ASC" ? "DESC" : "ASC",
                sortDateActive: true,
                sortVoteActive: false
            };
        });

    }

    handleOrderByVote = (e) => {

        const {sortVote} = this.state;
        const {dispatch} = this.props;

        dispatch(handleOrderBy('voteScore', sortVote));

        this.setState((state) => {
            return {
                sortVote: state.sortVote === "ASC" ? "DESC" : "ASC",
                sortDateActive: false,
                sortVoteActive: true
            };
        });

    }

    render() {

        const {sortDate, sortVote,sortDateActive,sortVoteActive} = this.state;
        const {loader} = this.props;
        const btnSortDateActive = sortDateActive ? "blue" : "";
        const btnSortVoteActive = sortVoteActive ? "blue" : "";
        const iconSortDate = sortDate === "ASC" ? "up" : "down";
        const iconSortVote = sortVote === "ASC" ? "up" : "down";

        return (
            <React.Fragment>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <button className={"ui right labeled icon button right floated " + btnSortVoteActive }
                                onClick={this.handleOrderByVote}>
                            <i className={"icon sort numeric " + iconSortVote}/>
                            Vote
                        </button>
                        <button className={"ui right labeled icon button right floated " + btnSortDateActive  }
                                onClick={this.handleOrderByDate}>
                            <i className={"icon sort amount " + iconSortDate}/>
                            Date
                        </button>
                    </div>
                </div>
                <br />
                <br />

                <div className="ui two doubling cards">
                    {loader && loader.show && (
                        <React.Fragment>
                            <PostListPlaceholder/>
                            <PostListPlaceholder/>
                        </React.Fragment>
                    )}

                    {loader && !loader.show && this.props.postsIds.map((id) => (
                        <Post id={id} key={id} modeView="list"/>
                    ))}

                </div>

                <div className="ui grid">
                    <div className="sixteen wide column">
                        {loader && !loader.show && this.props.postsIds.length <= 0 && (
                            <div className="ui info message">
                                <div className="align center header">
                                    Ops! no posts here :/<br/>
                                    Be the first!
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </React.Fragment>
        );
    }

}


function mapStateToProps({posts, loader}, props) {

    let postsIds = Object.keys(posts);
    const categoryParam = props.match.params.category;
    if (categoryParam) {
        postsIds = postsIds.filter((postId) => {
            if (posts[postId].category === categoryParam)
                return postId;
        })
    }

    return {
        postsIds,
        loader
    }

}

export default connect(mapStateToProps)(ListPosts);
