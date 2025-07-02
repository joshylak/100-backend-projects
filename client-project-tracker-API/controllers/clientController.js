    import fs from 'fs';
    import { v4 as uuidv4 } from 'uuid';

    const clientFile = './data/clients.json';

    const readClients = () => JSON.parse(fs.readFileSync(clientFile));
    const writeClients = (data) => fs.writeFileSync(clientFile, JSON.stringify(data, null, 2));

    export const getClients = (req, res) => {
    const clients = readClients();
    res.json(clients);
    };

    export const addClient = (req, res) => {
    const clients = readClients();
    const newClient = { id: uuidv4(), ...req.body };
    clients.push(newClient);
    writeClients(clients);
    res.status(201).json(newClient);
    };

    export const updateClient = (req, res) => {
    const clients = readClients();
    const index = clients.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).send('Client not found');
    clients[index] = { ...clients[index], ...req.body };
    writeClients(clients);
    res.json(clients[index]);
    };

    export const deleteClient = (req, res) => {
    let clients = readClients();
    clients = clients.filter(c => c.id !== req.params.id);
    writeClients(clients);
    res.status(204).send();
    };
