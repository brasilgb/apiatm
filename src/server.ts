import express, { Request, Response, NextFunction } from 'express';

import { router } from './routes';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

// app.use((request: Request, response: Response, next: NextFunction) => {
//     response.header('Access-Control-Allow-Origin', '*');
//     response.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     response.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
app.use('/public/images', express.static('./public/images'));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
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
    console.log(`Servidor rodando na porta ${port}.`);
})