import express from 'express'
import { Router, Request, Response } from 'express';

const app = express()
const router = Router()

app.use(express.json())

router.get('/', (req: Request, res:Response) => {
    res.json({name:'iphone 11', price:'R$ 1,200'})
})

app.use(router)

app.listen(8080, () => 'server running port 8080')