import {normalize, schema} from 'normalizr';

const api = "http://localhost:3001";

let token = 'amaral-varal';

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategory = (bookId) =>
    fetch(`${api}/books/${bookId}`, {headers})
        .then(res => res.json())
        .then(data => data.book)

const _getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

const _getPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => {
            console.log(typeof data);
            const postSchema = new schema.Array(new schema.Entity('posts'));
            const postsNormalized = normalize(data, postSchema);
            return postsNormalized.entities.posts;
        });

const _getComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, {headers})
        .then(res => res.json())
        .then(data => {
            return data;
        });

const _saveVotePost = (info) =>
    fetch(`${api}/posts/${info.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option: info.vote})
    }).then(res => res.json());

const _saveAddPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json());

const _saveEditPost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json());

const _saveDeletePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

const _saveAddComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json());

const _saveEditComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json());

const _saveDeleteComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

const _saveVoteComment = (info) =>
    fetch(`${api}/comments/${info.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option: info.vote})
    }).then(res => res.json());

export function getInitialData() {
    return Promise.all([
        _getCategories(),
        _getPosts(),
    ]).then(([categories, posts]) => ({
        categories,
        posts,
    }))
}

export function saveVotePost(info) {
    return _saveVotePost(info);
}

export function saveAddPost(post) {
    return _saveAddPost(post);
}

export function saveEditPost(post) {
    return _saveEditPost(post);
}

export function saveDeletePost(post) {
    return _saveDeletePost(post);
}

export function getComments(postId) {
    return _getComments(postId);
}

export function saveAddComment(comment) {
    return _saveAddComment(comment);
}

export function saveEditComment(comment) {
    return _saveEditComment(comment);
}

export function saveDeleteComment(comment) {
    console.log(comment, "delete");
    return _saveDeleteComment(comment);
}

export function saveVoteComment(info) {
    return _saveVoteComment(info);
}
