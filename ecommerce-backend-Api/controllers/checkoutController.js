import db from "../db/db.js";
import { v4 as uuid } from "uuid";

export const checkout = async (req, res) => {
  await db.read();
  const cart = db.data.cart;

  if (!cart.length) return res.status(400).json({ error: "Cart is empty" });

  const order = {
    id: uuid(),
    items: [...cart],
    total: cart.reduce((acc, item) => {
      const product = db.data.products.find(p => p.id === item.productId);
      return acc + product.price * item.quantity;
    }, 0),
    createdAt: new Date().toISOString()
  };

  db.data.orders.push(order);
  db.data.cart = [];
  await db.write();
  res.status(201).json({ message: "Checkout successful", order });
};
