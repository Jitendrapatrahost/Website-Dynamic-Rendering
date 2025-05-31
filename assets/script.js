const posts = [
  {
    title: "First Post Title",
    image: "assets/images/sample.jpg",
    link: "blog/post-1.html",
    description: "Short description of the first blog post."
  },
  {
    title: "Second Post Title",
    image: "assets/images/sample.jpg",
    link: "blog/post-2.html",
    description: "Short description of the second blog post."
  },
  // Add more posts here
];

const container = document.getElementById('blog-container');

posts.forEach(post => {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}" />
    <h3><a href="${post.link}">${post.title}</a></h3>
    <p>${post.description}</p>
  `;
  container.appendChild(card);
});
