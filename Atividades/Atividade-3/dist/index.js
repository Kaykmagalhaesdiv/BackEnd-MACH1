"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = prompt_sync_1.default();
let cpfUser;
let nameUser;
let ageUser;
let marital;
let addressUser;
let cityUser;
let stateUser;
let Message;
let listClients = [];
do {
    cpfUser = prompt("Digite o CPF (11 digitos): ");
    if (cpfUser.length === 11) {
        nameUser = prompt("Digite seu nome: ");
        ageUser = Number(prompt("Digite sua idade: "));
        marital = prompt("Estado civil: ");
        addressUser = prompt("Endereço: ");
        cityUser = prompt("Cidade: ");
        stateUser = prompt("Estado: ");
        let objClients = {
            cpf: cpfUser,
            name: nameUser,
            age: ageUser,
            maritalStatus: marital,
            address: addressUser,
            city: cityUser,
            state: stateUser,
        };
        listClients.push(objClients);
    }
    else {
        console.log("Por favor, digite o cpf com apenas 11 dígitos");
    }
    Message = prompt("Deseja continuar? ").toLocaleLowerCase();
} while (Message === "s");
console.table(listClients);
