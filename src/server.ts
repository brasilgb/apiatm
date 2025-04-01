import express, { Request, Response, NextFunction } from 'express';

import { router } from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        }) as any
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(port, () => {
    console.log("Servidor rodando na porta 3333.");
})