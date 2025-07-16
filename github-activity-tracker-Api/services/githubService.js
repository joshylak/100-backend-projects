    import axios from 'axios';

    const GITHUB_API = 'https://api.github.com/users';

    export const fetchUserActivity = async (username) => {
    try {
        const headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        };

        const res = await axios.get(`${GITHUB_API}/${username}/events/public`, {
        headers,
        });

        return res.data.map(event => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        created_at: event.created_at,
        }));
    } catch (err) {
        throw new Error('Failed to fetch user activity from GitHub');
    }
    };
