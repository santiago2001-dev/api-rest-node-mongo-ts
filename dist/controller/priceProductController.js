"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByPrice = void 0;
const dbConfig_1 = __importDefault(require("../db/dbConfig"));
const getProductsByPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUser = req.params.idUser;
        const nameProduct = req.params.nameProduct;
        const db = dbConfig_1.default.db("challenge");
        const collection = db.collection("users");
        const id = parseInt(idUser, 10);
        const filter = {
            id: id,
        };
        const user = yield collection.find(filter).toArray();
        if (user.length === 0) {
            res.status(400).json({
                message: `user with id ${id} not found`,
            });
        }
        else if (user[0].metadata) {
            const metadata = user[0].metadata;
            const preciosEspeciales = metadata.precios_especiales;
            const productoEspecifico = preciosEspeciales.find((item) => item.nombre_producto === nameProduct);
            if (productoEspecifico) {
                res.status(200).json({
                    message: `user ${idUser} has oferts`,
                    product_with_ofert: productoEspecifico,
                });
            }
            else {
                res.status(400).json({
                    message: `Not found product  ${nameProduct}`,
                });
            }
        }
        else {
            const productBase = yield getProductsByName(nameProduct, res);
            res.json({
                message: "User not have offers ",
                product_base: productBase,
            });
        }
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.getProductsByPrice = getProductsByPrice;
const getProductsByName = (nameProduct, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = dbConfig_1.default.db("challenge");
        const collection = db.collection("products");
        const filter = {
            nombre: nameProduct,
        };
        const product = yield collection.find(filter).toArray();
        const message = `product ${nameProduct} not found`;
        return product.length === 0 ? message : product;
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
//# sourceMappingURL=priceProductController.js.map