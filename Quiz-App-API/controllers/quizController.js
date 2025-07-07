    import fs from 'fs-extra';
    import { v4 as uuidv4 } from 'uuid';

    const DB_PATH = './db/quizzes.json';

    const readDB = async () => await fs.readJson(DB_PATH);
    const writeDB = async (data) => await fs.writeJson(DB_PATH, data, { spaces: 2 });

    export const createQuiz = async (req, res) => {
    const { title, questions } = req.body;
    if (!title || !questions || !Array.isArray(questions)) {
        return res.status(400).json({ message: 'Invalid quiz data' });
    }

    const newQuiz = {
        id: uuidv4(),
        title,
        questions: questions.map(q => ({
        question: q.question,
        options: q.options,
        answer: q.answer, // Keep correct answer hidden in real-world apps
        })),
    };

    const quizzes = await readDB();
    quizzes.push(newQuiz);
    await writeDB(quizzes);

    res.status(201).json(newQuiz);
    };

    export const getAllQuizzes = async (req, res) => {
    const quizzes = await readDB();
    res.json(quizzes.map(({ id, title }) => ({ id, title })));
    };

    export const getQuizById = async (req, res) => {
    const quizzes = await readDB();
    const quiz = quizzes.find(q => q.id === req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    const quizWithoutAnswers = {
        ...quiz,
        questions: quiz.questions.map(({ question, options }) => ({ question, options })),
    };

    res.json(quizWithoutAnswers);
    };

    export const submitQuiz = async (req, res) => {
    const { answers } = req.body;
    const quizzes = await readDB();
    const quiz = quizzes.find(q => q.id === req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    let score = 0;

    quiz.questions.forEach((q, idx) => {
        if (answers && answers[idx] === q.answer) score++;
    });

    res.json({ score, total: quiz.questions.length });
    };
