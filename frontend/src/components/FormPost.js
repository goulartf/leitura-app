import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
import {handleAddPost, handleEditPost} from '../actions/posts'
import connect from "react-redux/es/connect/connect";

class FormPost extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        redirect: false
    };

    componentDidMount() {
        const {post} = this.props;

        if (post) {
            this.setState(() => ({
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category
            }))
        }

    }

    componentWillReceiveProps(props) {

        const {post} = props;

        if (post) {
            this.setState(() => ({
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category
            }))
        }

    }

    handleChangeBody = (e) => {
        const body = e.target.value
        this.setState(() => ({
            body
        }))
    }

    handleChangeTitle = (e) => {
        const title = e.target.value
        this.setState(() => ({
            title
        }))
    }

    handleChangeAuthor = (e) => {
        const author = e.target.value
        this.setState(() => ({
            author
        }))
    }

    handleChangeCategory = (e, {value}) => {
        const category = value
        this.setState(() => ({
            category
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {title, body, author, category} = this.state
        const {dispatch, id} = this.props

        if (id) {
            dispatch(handleEditPost({id, title, body, author, category}))
        } else {
            dispatch(handleAddPost({title, body, author, category}))
        }

        this.setState(() => ({
            title: '',
            text: '',
            author: '',
            category: '',
            redirect: true
        }))

    }


    render() {

        const {title, body, author, category, redirect} = this.state

        const {categories, id} = this.props;

        if (redirect === true) {
            return <Redirect to='/'/>
        }

        const disableSubmit = body === '' || title === '' || author === '' || category === '' ? 'disabled' : '';

        return (

            <form onSubmit={this.handleSubmit}>
                <div className="ui fluid card">
                    <div className="content">
                        <div className="header">Post</div>
                    </div>
                    <div className="content">

                        <div className="description">
                            <div className="ui form">
                                <div className="required field">
                                    <label>Category</label>
                                    <Dropdown clearable
                                              placeholder="Select Category"
                                              name='category'
                                              options={categories}
                                              value={category}
                                              selection
                                              onChange={this.handleChangeCategory}/>
                                </div>
                                <div className="required field">
                                    <label>Title</label>
                                    <input type="text"
                                           name="title"
                                           value={title}
                                           placeholder="Post Title"
                                           onChange={this.handleChangeTitle}/>
                                </div>
                                <div className="required field">
                                    <label>Author</label>
                                    <input type="text"
                                           name="author"
                                           value={author}
                                           placeholder="Author Name"
                                           onChange={this.handleChangeAuthor}/>
                                </div>
                                <div className="required field">
                                    <label>Message</label>
                                    <textarea
                                        placeholder="What's on your mind ?"
                                        value={body}
                                        onChange={this.handleChangeBody}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className={"ui bottom attached button green " + disableSubmit}>
                        {!id && (
                            <span>
                                <i className="add icon"></i>
                                New Post
                            </span>
                        )}

                        {id && (
                            <span>
                            <i className="edit icon"></i>
                            Edit Post
                            </span>
                        )}
                    </button>
                </div>
            </form>

        );
    }
}

function mapStateToProps({posts, categories}, {id}) {
    console.log(id);
    return {
        post: id ? posts[id] : null,
        categories: Object.keys(categories).map(category => {
                return {
                    key: categories[category].path,
                    value: categories[category].path,
                    text: categories[category].name,
                    selected: true
                }
            }
        )
    }

}


export default connect(mapStateToProps)(FormPost);

