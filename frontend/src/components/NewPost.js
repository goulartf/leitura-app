import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
import {handleAddPost} from '../actions/posts'

class NewPost extends Component {

    state = {
        title: '',
        text: '',
        author: '',
        category: '',
        redirect: false
    };

    handleChangeText = (e) => {
        const text = e.target.value
        this.setState(() => ({
            text
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

    handleChangeCategory = (e, { value }) => {
        const category = value
        this.setState(() => ({
            category
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {title, text, author, category} = this.state
        const {dispatch, id} = this.props

        dispatch(handleAddPost({title, text, author, category}))

        this.setState(() => ({
            title: '',
            text: '',
            author: '',
            category: '',
            redirect: true
        }))
    }


    render() {

        const {title, text, author, category, redirect} = this.state
        const {categories} = this.props

        if (redirect === true) {
            return <Redirect to='/'/>
        }

        console.log(title, text, author, category);

        const disableSubmit = text === '' || title === '' || author === '' || category === ''  ? 'disabled' : '';

        return (
            <div className="ui one column grid">
                <div className="column">

                    <form className='new-tweet' onSubmit={this.handleSubmit}>
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header">New Post</div>
                                <div className="description">
                                    <div className="ui form">
                                        <div className="required field">
                                            <label>Category</label>
                                            <Dropdown clearable
                                                      placeholder="Select Category"
                                                      name='category'
                                                      options={categories}
                                                      selection
                                                      onChange={this.handleChangeCategory}/>
                                        </div>
                                        <div className="required field">
                                            <label>Title</label>
                                            <input type="text"
                                                   name="title"
                                                   placeholder="Post Title"
                                                   onChange={this.handleChangeTitle} />
                                        </div>
                                        <div className="required field">
                                            <label>Author</label>
                                            <input type="text"
                                                   name="author"
                                                   placeholder="Author Name"
                                                   onChange={this.handleChangeAuthor}/>
                                        </div>
                                        <div className="required field">
                                            <label>Message</label>
                                            <textarea
                                                placeholder="What's on your mind ?"
                                                value={text}
                                                onChange={this.handleChangeText}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={"ui bottom attached button green " + disableSubmit}>
                                <i className="add icon"></i>
                                New Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps({categories}) {

    return {
        categories: Object.keys(categories).map(category => {
                return {
                    key: categories[category].path,
                    value: categories[category].path,
                    text: categories[category].name
                }
            }
        )
    }
}

export default connect(mapStateToProps)(NewPost);
