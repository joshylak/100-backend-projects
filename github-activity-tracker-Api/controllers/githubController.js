    import { fetchUserActivity } from '../services/githubService.js';

    export const getUserActivity = async (req, res) => {
    const { username } = req.params;

    try {
        const data = await fetchUserActivity(username);
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    };
