import express from 'express';
import filmesRouter from './routes/filmes';

const app = express();

app.use(express.json());
app.use(filmesRouter);

app.listen(3333, ola)

function ola() {
    console.log("Executando na porta 8000...");
}