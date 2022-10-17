const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout( () => {
        let output = '';

        posts.forEach( (post, index)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000 ); // take 1 second
}

function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000 ); // take 2 seconds
}

createPost({title:'Post Three', body:'This is post three'}, getPosts);
