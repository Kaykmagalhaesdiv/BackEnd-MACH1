"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
app.use(express_1.default.json());
//Rota onde a minha API vai responder
route.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
});
route.get('/products', (req, res) => {
    res.json({ name: 'Iphone 11', price: 1.200 });
});
// Setando o uso da rota ou das rotas
app.use(route);
// Stardando o servidor
app.listen(8080, () => 'server running port 8080');
