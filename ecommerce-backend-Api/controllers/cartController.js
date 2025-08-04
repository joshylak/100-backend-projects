import db from "../db/db.js";

export const getCart = async (req, res) => {
  await db.read();
  res.json(db.data.cart);
};

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  await db.read();
  const product = db.data.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: "Product not found" });

  const existingItem = db.data.cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    db.data.cart.push({ productId, quantity });
  }
  await db.write();
  res.status(201).json({ message: "Added to cart" });
};

export const removeFromCart = async (req, res) => {
  const { id } = req.params;
  await db.read();
  db.data.cart = db.data.cart.filter(item => item.productId !== id);
  await db.write();
  res.json({ message: "Removed from cart" });
};
