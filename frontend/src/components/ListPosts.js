import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './Post';
import {Link} from "react-router-dom";
import NavCategories from "./NavCategories";
import {handleOrderBy, handleVotePost} from "../actions/posts";

class ListPosts extends Component {

    handleOrder = (e) => {

        // console.log('aqi', this.props);
        // e.preventDefault();
        const {dispatch, posts} = this.props
        dispatch(handleOrderBy(posts,'data','asc'));

    }

    render() {

        return (
            <React.Fragment>
                <div className="ui grid">
                    <div className="fourteen wide column">
                        <div className="">
                            <h1 className="ui header">READABLE</h1>
                        </div>
                    </div>
                    <a onClick={this.handleOrder}>Order</a>
                    <div className="two wide column">
                        <Link to='/new' exact className="ui right labeled icon button blue">
                            <i className="plus icon"></i>
                            Novo
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


function mapStateToProps({posts}) {

    return {
        posts,
        postsIds: Object.keys(posts)
    }
}

export default connect(mapStateToProps)(ListPosts);
