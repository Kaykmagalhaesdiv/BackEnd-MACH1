import promptsync from 'prompt-sync'

let name:string
let email:string
let age:number
let sex:string
let qty:number
let listUsers:Array<any> = []

let prompt = promptsync()

qty = Number(prompt('Quantos usuarios deseja cadastrar?: '))
for(let i = 0; i < qty; i++) {
    name = prompt('Digite o nome do usuario: ')
    email = prompt('Digite o endereço de email: ')
    age = Number(prompt('Digite sua idade: '))
    sex = prompt('Digite seu sexo: ')
    console.log('--------------------------------------')
    listUsers.push(name, email, age, sex)
}
console.table(listUsers)