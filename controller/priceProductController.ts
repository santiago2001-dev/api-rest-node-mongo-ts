import { Request, Response } from 'express';
import client from '../db/dbConfig';
export const getProductsByPrice = async (req : Request, res : Response) => {
  try {

    const idUser = req.params.idUser; 
    const nameProduct = req.params.nameProduct;
    const db = client.db("challenge");
    const collection = db.collection("users");
    const id : number  = parseInt(idUser, 10);

    const filter = {
      id: id,
    };

    const user = await collection.find(filter).toArray();

    if (user.length === 0) {
      res.status(400).json({
        message: `user with id ${id} not found`,
      });
    } else if (user[0].metadata) {
      const metadata = user[0].metadata;
      const preciosEspeciales = metadata.precios_especiales;

      const productoEspecifico = preciosEspeciales.find(
        (item: { nombre_producto: string }) => item.nombre_producto === nameProduct
      );

      if (productoEspecifico) {
        res.status(200).json({
          message: `user ${idUser} has oferts`,
          product_with_ofert: productoEspecifico,
        });
      } else {
        res.status(400).json({
          message: `Not found product  ${nameProduct}`,
        });
      }
    } else {
      const productBase = await getProductsByName(nameProduct,res);
      res.json({
        message: "User not have offers ",
        product_base: productBase,
      });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};


const getProductsByName = async (nameProduct : string, res :Response) => {
  try {
    const db = client.db("challenge");
    const collection = db.collection("products");
    const filter = {
      nombre: nameProduct,
    };

    const product = await collection.find(filter).toArray();
    const message = `product ${nameProduct} not found`;

    return product.length === 0 ? message : product;
  } catch (e) {
    res.status(500).json({ error: e });
  }
};