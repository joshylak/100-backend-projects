let blogs = [];
let currentId = 1;

export const createBlog = (req, res) => {
  const blog = {
    id: currentId++,
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date(),
  };
  blogs.push(blog);
  res.status(201).json(blog);
};

export const getBlogs = (req, res) => {
  res.json(blogs);
};

export const getBlogById = (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).json({ message: 'Blog not found' });
  res.json(blog);
};

export const updateBlog = (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).json({ message: 'Blog not found' });

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;

  res.json(blog);
};

export const deleteBlog = (req, res) => {
  blogs = blogs.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: 'Blog deleted' });
};
