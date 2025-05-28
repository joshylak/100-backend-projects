let posts = [];

module.exports = {
  getAll: () => posts,
  getById: (id) => posts.find(post => post.id === id),
  create: (post) => {
    posts.push(post);
    return post;
  },
  update: (id, updatedPost) => {
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updatedPost };
      return posts[index];
    }
    return null;
  },
  delete: (id) => {
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
      return posts.splice(index, 1);
    }
    return null;
  }
};