import express, { Request, Response } from 'express'

const app = express()
const PORT = 3333

app.get('/', (request: Request, response: Response) => {
   response.send({ message: 'hello world' })
})

app.listen(PORT, () => console.log(`server running in port ${PORT}\nhttps://localhost:${PORT}`))
