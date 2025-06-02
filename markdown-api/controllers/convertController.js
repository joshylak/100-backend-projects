const { marked } = require('marked');

const convertMarkdown = (req, res) => {
    const { markdown } =req.body;
    if (!markdown) {
        return res.status(400).json({ error: 'Invalid or missing markdown input' });
    }
    try {
        const html = marked(markdown);
        res.json({ html });
    } catch (error) {
        res.status(500).json({ error: 'Failed to convert markdown to HTML' });
    }
};
module.exports = {
    convertMarkdown
};