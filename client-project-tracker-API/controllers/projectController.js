    import fs from 'fs';
    import { v4 as uuidv4 } from 'uuid';

    const projectFile = './data/projects.json';

    const readProjects = () => JSON.parse(fs.readFileSync(projectFile));
    const writeProjects = (data) => fs.writeFileSync(projectFile, JSON.stringify(data, null, 2));

    export const getProjects = (req, res) => {
    const projects = readProjects();
    res.json(projects);
    };

    export const addProject = (req, res) => {
    const projects = readProjects();
    const newProject = { id: uuidv4(), ...req.body };
    projects.push(newProject);
    writeProjects(projects);
    res.status(201).json(newProject);
    };

    export const updateProject = (req, res) => {
    const projects = readProjects();
    const index = projects.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).send('Project not found');
    projects[index] = { ...projects[index], ...req.body };
    writeProjects(projects);
    res.json(projects[index]);
    };

    export const deleteProject = (req, res) => {
    let projects = readProjects();
    projects = projects.filter(p => p.id !== req.params.id);
    writeProjects(projects);
    res.status(204).send();
    };

    export const getProjectsByClient = (req, res) => {
    const projects = readProjects();
    const clientProjects = projects.filter(p => p.clientId === req.params.clientId);
    res.json(clientProjects);
    };
