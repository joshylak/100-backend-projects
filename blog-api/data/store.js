// In-memory data store
let blogs = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    author: 'John Doe',
    tags: ['tech', 'nodejs'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let comments = [
  {
    id: 1,
    blogId: 1,
    name: 'Jane Smith',
    email: 'jane@example.com',
    content: 'Great post!',
    createdAt: new Date()
  }
];

let nextBlogId = 2;
let nextCommentId = 2;

export default {
  blogs,
  comments,
  nextBlogId,
  nextCommentId
};