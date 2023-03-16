"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let modeloVeiculo;
let listaDeVeiculos = [];
let quantidadeVeiculos;
quantidadeVeiculos = Number(prompt('Digite a quantidade de veiculos que quer cadastrar'));
listaDeVeiculos.push({ modelo: 'Fox', placa: '123', renavam: 123 });
// for(let i = 0; i < quantidadeVeiculos; i++) {
//     modeloVeiculo = prompt('Digite o modelo do veículo:')
//     listaDeVeiculos.push(modeloVeiculo)
// }
console.table(listaDeVeiculos);
