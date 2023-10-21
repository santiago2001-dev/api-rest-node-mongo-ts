"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const priceProductController_1 = require("../controller/priceProductController");
const router = (0, express_1.Router)();
router.get('/:idUser/:nameProduct', priceProductController_1.getProductsByPrice);
exports.default = router;
//# sourceMappingURL=priceProductRoutes.js.map