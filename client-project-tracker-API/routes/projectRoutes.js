    import express from 'express';
    import {
    getProjects,
    addProject,
    updateProject,
    deleteProject,
    getProjectsByClient,
    } from '../controllers/projectController.js';

    const router = express.Router();

    router.get('/', getProjects);
    router.post('/', addProject);
    router.put('/:id', updateProject);
    router.delete('/:id', deleteProject);
    router.get('/client/:clientId', getProjectsByClient);

    export default router;
