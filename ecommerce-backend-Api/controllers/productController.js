import db from "../db/db.js";
import { v4 as uuid } from "uuid";

export const getProducts = async (req, res) => {
  await db.read();
  res.json(db.data.products);
};

export const addProduct = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: uuid(), name, price };
  db.data.products.push(newProduct);
  await db.write();
  res.status(201).json(newProduct);
};
