    import fs from 'fs-extra';
    import { v4 as uuidv4 } from 'uuid';

    const DB_PATH = './db/polls.json';

    const readDB = async () => await fs.readJson(DB_PATH);
    const writeDB = async (data) => await fs.writeJson(DB_PATH, data, { spaces: 2 });

    export const createPoll = async (req, res) => {
    const { question, options } = req.body;

    if (!question || !Array.isArray(options) || options.length < 2) {
        return res.status(400).json({ message: 'Question and at least 2 options are required.' });
    }

    const poll = {
        id: uuidv4(),
        question,
        options: options.map(opt => ({ option: opt, votes: 0 }))
    };

    const polls = await readDB();
    polls.push(poll);
    await writeDB(polls);

    res.status(201).json(poll);
    };

    export const getAllPolls = async (req, res) => {
    const polls = await readDB();
    res.json(polls.map(({ id, question }) => ({ id, question })));
    };

    export const getPollById = async (req, res) => {
    const polls = await readDB();
    const poll = polls.find(p => p.id === req.params.id);
    if (!poll) return res.status(404).json({ message: 'Poll not found' });

    res.json(poll);
    };

    export const votePoll = async (req, res) => {
    const { option } = req.body;

    const polls = await readDB();
    const poll = polls.find(p => p.id === req.params.id);

    if (!poll) return res.status(404).json({ message: 'Poll not found' });

    const selected = poll.options.find(o => o.option === option);
    if (!selected) return res.status(400).json({ message: 'Invalid option selected' });

    selected.votes += 1;
    await writeDB(polls);

    res.json({ message: 'Vote recorded', pollId: poll.id });
    };

    export const getPollResults = async (req, res) => {
    const polls = await readDB();
    const poll = polls.find(p => p.id === req.params.id);

    if (!poll) return res.status(404).json({ message: 'Poll not found' });

    const results = poll.options.map(({ option, votes }) => ({
        option,
        votes
    }));

    res.json({
        question: poll.question,
        results
    });
    };
