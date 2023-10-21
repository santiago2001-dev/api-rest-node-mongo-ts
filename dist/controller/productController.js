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
exports.getAllProducts = void 0;
const dbConfig_1 = __importDefault(require("../db/dbConfig"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = dbConfig_1.default.db("challenge");
        const collection = db.collection("products");
        const product = yield collection.find({}).toArray();
        res.status(200).json({
            products: product,
            msg: 'Success'
        });
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=productController.js.map