import promptSync from 'prompt-sync'

interface Carro {
    modelo:string,
    placa:string,
    renavam:number
}

const prompt = promptSync()
let modeloVeiculo:string
let listaDeVeiculos:Array<Carro> = []
let quantidadeVeiculos:number

quantidadeVeiculos = Number(prompt('Digite a quantidade de veiculos que quer cadastrar'))
listaDeVeiculos.push({modelo:'Fox', placa:'123', renavam:123})
// for(let i = 0; i < quantidadeVeiculos; i++) {
//     modeloVeiculo = prompt('Digite o modelo do veículo:')
//     listaDeVeiculos.push(modeloVeiculo)
// }

console.table(listaDeVeiculos)