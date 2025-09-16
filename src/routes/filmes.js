import { Router } from "express";

const filmesRouter = Router();

filmesRouter.get("/api/filmes", obterFilmes);

const filmes = [
    {
        id: 0,
        filme: "Pica pau"
    },
    {
        id: 1,
        filme: "Ben 10"
    }
]

function obterFilmes(req, res) {
    res.status(200).json(filmes);
}

export default filmesRouter;