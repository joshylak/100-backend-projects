    import { v4 as uuidv4 } from 'uuid';
    import { readData, writeData } from '../utils/fileHandler.js';

    const file = './data/destinations.json';

    export const getAllDestinations = async (req, res) => {
    const data = await readData(file);
    res.json(data);
    };

    export const getDestinationById = async (req, res) => {
    const data = await readData(file);
    const destination = data.find(dest => dest.id === req.params.id);
    if (!destination) return res.status(404).json({ message: 'Not found' });
    res.json(destination);
    };

    export const addDestination = async (req, res) => {
    const { name, country, priority } = req.body;
    const newDest = { id: uuidv4(), name, country, priority };
    const data = await readData(file);
    data.push(newDest);
    await writeData(file, data);
    res.status(201).json(newDest);
    };

    export const updateDestination = async (req, res) => {
    const data = await readData(file);
    const index = data.findIndex(dest => dest.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Not found' });

    data[index] = { ...data[index], ...req.body };
    await writeData(file, data);
    res.json(data[index]);
    };

    export const deleteDestination = async (req, res) => {
    const data = await readData(file);
    const filtered = data.filter(dest => dest.id !== req.params.id);
    if (data.length === filtered.length) return res.status(404).json({ message: 'Not found' });

    await writeData(file, filtered);
    res.json({ message: 'Deleted' });
    };
