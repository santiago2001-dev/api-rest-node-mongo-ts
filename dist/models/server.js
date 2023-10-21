"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRoutes_1 = __importDefault(require("../routes/productsRoutes"));
const priceProductRoutes_1 = __importDefault(require("../routes/priceProductRoutes"));
const cors_1 = __importDefault(require("cors"));
class server {
    constructor() {
        this.apiPaths = {
            products: '/api/products',
            price: '/api/price'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.routes();
        this.middelwares();
    }
    middelwares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.products, productsRoutes_1.default);
        this.app.use(this.apiPaths.price, priceProductRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running on http://localhost:${this.port}`);
        });
    }
}
exports.default = server;
//# sourceMappingURL=server.js.map