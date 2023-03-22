import express from 'express';
import { Router, Request, Response } from 'express';

const app = express()
const route = Router()

app.use(express.json())

//Rota onde a minha API vai responder
route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello world'})
})

route.get('/products', (req: Request, res: Response) => {
    res.json({name:'Iphone 11', price:1.200})
})

// Setando o uso da rota ou das rotas
app.use(route)
// Stardando o servidor
app.listen(8080, () => 'server running port 8080')
