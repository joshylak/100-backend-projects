import http from 'http';
import { getAllBookmarks, addBookmark, deleteBookmark } from './bookmarks.js';

const PORT = 3000;

const parseBody = (req) => {
    return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(JSON.parse(body || '{}')));
    });
};

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/bookmarks') {
    return res.end(JSON.stringify(getAllBookmarks()));
    }

    if (req.method === 'POST' && req.url === '/bookmarks') {
    const { title, url } = await parseBody(req);
    if (!title || !url) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: 'Title and URL are required' }));
    }
    const bookmark = addBookmark(title, url);
    res.statusCode = 201;
    return res.end(JSON.stringify(bookmark));
    }

    if (req.method === 'DELETE' && req.url.startsWith('/bookmarks/')) {
    const id = parseInt(req.url.split('/')[2]);
    const deleted = deleteBookmark(id);
    if (!deleted) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'Bookmark not found' }));
    }
    return res.end(JSON.stringify(deleted));
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, () => {
    console.log(`🚀 Bookmark Manager running at http://localhost:${PORT}`);
});
