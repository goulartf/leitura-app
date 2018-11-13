import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import {Link} from "react-router-dom";
import NavCategories from "./NavCategories";
import {handleReceivePost, handleReceivePostByCategory, handleOrderBy} from "../actions/posts";

class ListPosts extends Component {

    state = {
        sortDate: 'ASC',
        sortVote: 'ASC',
    }

    handleOrderByDate = (e) => {

        const {sortDate} = this.state;
        const {dispatch} = this.props;

        dispatch(handleOrderBy('timestamp', sortDate));

        this.setState((state) => {
            return {sortDate: state.sortDate === "ASC" ? "DESC" : "ASC"};
        });

    }

    handleOrderByVote = (e) => {

        const {sortVote} = this.state;
        const {dispatch} = this.props;

        dispatch(handleOrderBy('voteScore', sortVote));

        this.setState((state) => {
            return {sortVote: state.sortVote === "ASC" ? "DESC" : "ASC"};
        });

    }

    render() {

        const {sortDate, sortVote} = this.state;
        const iconSortDate = sortDate === "ASC" ? "up" : "down";
        const iconSortVote = sortVote === "ASC" ? "up" : "down";

        return (
            <React.Fragment>
                <div className="ui grid">
                    <div className="nine wide column">
                        <div className="">
                            <h1 className="ui header">READABLE</h1>
                        </div>
                    </div>

                    <div className="two wide column" onClick={this.handleOrderByVote}>
                        <button className="ui right labeled icon button blue right floated">
                            <i className={"icon sort numeric " + iconSortVote}/>
                            Vote
                        </button>
                    </div>

                    <div className="two wide column">
                        <button className="ui right labeled icon button blue right floated"
                                onClick={this.handleOrderByDate}>
                            <i className={"icon sort amount " + iconSortDate}/>
                            Date
                        </button>
                    </div>

                    <div className="three wide column">
                        <Link to='/new' className="ui right labeled icon button blue right floated">
                            <i className="plus icon"></i>
                            Try now!
                        </Link>
                    </div>
                </div>

                <div className="ui grid">
                    <div className="four wide column">
                        <NavCategories/>
                    </div>
                    <div className="twelve wide column">
                        <div className="ui two stackable cards">
                            {this.props.postsIds.map((id) => (
                                <Post id={id} key={id}/>
                            ))}
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}


function mapStateToProps({posts}, props) {

    let postsIds = Object.keys(posts);
    const categoryParam = props.match.params.category;
    if(categoryParam){
        postsIds = postsIds.filter((postId) => {
            console.log(posts[postId].category , categoryParam)
            if(posts[postId].category === categoryParam)
                return postId;
        })
    }

    return {
        postsIds
    }

}

export default connect(mapStateToProps)(ListPosts);
