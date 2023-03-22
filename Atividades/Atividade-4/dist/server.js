"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const router = (0, express_2.Router)();
app.use(express_1.default.json());
router.get('/', (req, res) => {
    res.json({ name: 'iphone 11', price: 'R$ 1,200' });
});
app.use(router);
app.listen(8080, () => 'server running port 8080');
