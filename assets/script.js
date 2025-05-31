const posts = [
  {
    title: "Learn JavaScript Basics",
    image: "assets/images/sample.jpg",
    link: "blog/post-1.html",
    description: "Start your JavaScript journey here!",
    category: "Tech"
  },
  {
    title: "Healthy Morning Routines",
    image: "assets/images/sample.jpg",
    link: "blog/post-2.html",
    description: "Lifestyle tips to kickstart your day.",
    category: "Lifestyle"
  },
  {
    title: "5 Tips to Improve Focus",
    image: "assets/images/sample.jpg",
    link: "blog/post-3.html",
    description: "Simple techniques to boost productivity.",
    category: "Tips"
  }
];

const container = document.getElementById('blog-container');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function renderPosts(filteredPosts) {
  container.innerHTML = "";
  filteredPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p>${post.description}</p>
    `;
    container.appendChild(card);
  });
}

function filterPosts() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchValue) ||
      post.description.toLowerCase().includes(searchValue);

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderPosts(filtered);
}

// Initial render
renderPosts(posts);

// Event listeners
searchInput.addEventListener('input', filterPosts);
categoryFilter.addEventListener('change', filterPosts);
