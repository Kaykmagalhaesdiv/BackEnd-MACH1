import promptSync from "prompt-sync"
const prompt = promptSync();

interface IClient {
    cpf: string
    name: string
    age: number
    maritalStatus: string
    address: string
    city: string
    state: string
  }

let cpfUser: string
let nameUser: string
let ageUser: number
let marital: string
let addressUser: string
let cityUser: string
let stateUser: string
let Message: string
let listClients: Array<IClient> = []

do {
    cpfUser = prompt("Digite o CPF (11 digitos): ");
    if (cpfUser.length === 11) {
      nameUser = prompt("Digite seu nome: ");
      ageUser = Number(prompt("Digite sua idade: "));
      marital = prompt("Estado civil: ");
      addressUser = prompt("Endereço: ");
      cityUser = prompt("Cidade: ");
      stateUser = prompt("Estado: ");
  
      let objClients: IClient = {
        cpf: cpfUser,
        name: nameUser,
        age: ageUser,
        maritalStatus: marital,
        address: addressUser,
        city: cityUser,
        state: stateUser,
      }
      listClients.push(objClients);

    } else {
      console.log("Por favor, digite o cpf com apenas 11 dígitos");
    }
    Message = prompt("Deseja continuar? ").toLocaleLowerCase();
  } while (Message === "s");
  
  console.table(listClients)