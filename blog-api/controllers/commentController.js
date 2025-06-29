let comments = [];
let currentCommentId = 1;

export const addComment = (req, res) => {
  const { blogId, content } = req.body;
  const comment = {
    id: currentCommentId++,
    blogId: parseInt(blogId),
    content,
    createdAt: new Date(),
  };
  comments.push(comment);
  res.status(201).json(comment);
};

export const getCommentsByBlog = (req, res) => {
  const blogId = parseInt(req.params.blogId);
  const filteredComments = comments.filter(c => c.blogId === blogId);
  res.json(filteredComments);
};
