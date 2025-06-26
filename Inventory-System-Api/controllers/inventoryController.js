    let inventory = [];
    let idCounter = 1;

    export const addProduct = (req, res) => {
    const { name, description, quantity, price } = req.body;
    if (!name || quantity == null || price == null) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProduct = {
        id: idCounter++,
        name,
        description: description || '',
        quantity,
        price
    };

    inventory.push(newProduct);
    res.status(201).json(newProduct);
    };

    export const getAllProducts = (req, res) => {
    res.json(inventory);
    };

    export const getProductById = (req, res) => {
    const product = inventory.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
    };

    export const updateProduct = (req, res) => {
    const product = inventory.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, description, quantity, price } = req.body;
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (quantity !== undefined) product.quantity = quantity;
    if (price !== undefined) product.price = price;

    res.json(product);
    };

    export const deleteProduct = (req, res) => {
    const index = inventory.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Product not found' });

    inventory.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
    };

    export const adjustStock = (req, res) => {
    const product = inventory.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { adjustment } = req.body;
    if (typeof adjustment !== 'number') {
        return res.status(400).json({ message: 'Adjustment must be a number' });
    }

    product.quantity += adjustment;
    res.json(product);
    };
