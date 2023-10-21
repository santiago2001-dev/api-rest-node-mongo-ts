import { Request, Response } from 'express';
import client from '../db/dbConfig';




export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const db = client.db("challenge");
    const collection = db.collection("products");
    const product = await collection.find({}).toArray();
    res.status(200).json({
      products: product,
      msg: 'Success'
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
