"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let name;
let email;
let age;
let sex;
let qty;
let listUsers = [];
let prompt = (0, prompt_sync_1.default)();
qty = Number(prompt('Quantos usuarios deseja cadastrar?: '));
for (let i = 0; i < qty; i++) {
    name = prompt('Digite o nome do usuario: ');
    email = prompt('Digite o endereço de email: ');
    age = Number(prompt('Digite sua idade: '));
    sex = prompt('Digite seu sexo: ');
    console.log('--------------------------------------');
    listUsers.push(name, email, age, sex);
}
console.table(listUsers);
