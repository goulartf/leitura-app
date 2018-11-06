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

export function getInitialData() {
    return Promise.all([
        _getCategories(),
        _getPosts(),
    ]).then(([categories, posts]) => ({
        categories,
        posts,
    }))
}


// export const update = (book, shelf) =>
//     fetch(`${api}/books/${book.id}`, {
//         method: 'PUT',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ shelf })
//     }).then(res => res.json())
//
// export const search = (query) =>
//     fetch(`${api}/search`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ query })
//     }).then(res => res.json())
//         .then(data => data.books)