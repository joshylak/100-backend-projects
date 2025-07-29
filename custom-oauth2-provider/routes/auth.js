    import express from 'express';
    import { v4 as uuidv4 } from 'uuid';
    import db from '../utils/db.js';

    const router = express.Router();

    router.get('/authorize', async (req, res) => {
    const { client_id, redirect_uri } = req.query;
    await db.read();
    const client = db.data.clients.find(c => c.client_id === client_id && c.redirect_uris.includes(redirect_uri));
    if (!client) return res.status(400).send('Invalid client');

    res.send(`
        <form method="POST" action="/authorize">
        <input name="username" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <input type="hidden" name="client_id" value="${client_id}" />
        <input type="hidden" name="redirect_uri" value="${redirect_uri}" />
        <button type="submit">Authorize</button>
        </form>
    `);
    });

    router.post('/authorize', express.urlencoded({ extended: true }), async (req, res) => {
    const { username, password, client_id, redirect_uri } = req.body;
    await db.read();
    const user = db.data.users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).send('Invalid credentials');

    const code = uuidv4();
    db.data.authCodes.push({ code, client_id, user_id: user.id });
    await db.write();

    const redirectUrl = new URL(redirect_uri);
    redirectUrl.searchParams.set('code', code);
    res.redirect(redirectUrl.toString());
    });

    export default router;
