const username = 'cyberking99'
const perPage = 15; //If you have more blog posts, increase this or add pagination

const getPosts = async () => {
    const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=${perPage}`);
    const data = await response.json();
    const name = data[0].user.name;
    document.querySelectorAll('.name').forEach(el => el.textContent = name);
    document.title = `${name}'s Blog`;
    for(post of data){
        addPost(post);
    }
}

const addPost = post => {
    const template = document.querySelector('#blog-item');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = post.title;
    clone.querySelector('.url').href = `post.html?id=${post.id}`;
    
    if(post.cover_image){
        clone.querySelector('.cover').src = post.cover_image;
    }else{
        clone.querySelector('.cover').src = './assets/cover_image.jpg';
    }

    document.querySelector('#blog-list').appendChild(clone);
}

getPosts();