import { validateDataAgainstSchema } from '../services/validator.service.js';

export const validateSchema = (req, res) => {
  const { schema, data } = req.body;

  if (!schema || !data) {
    return res.status(400).json({ error: 'Both schema and data are required.' });
  }

  const { valid, errors } = validateDataAgainstSchema(schema, data);

  return res.json({ valid, errors });
};
