import { fastify } from 'fastify'
import { DataBasePotgresConfig } from './database-postgres.js';
const server = fastify()
const db = new DataBasePotgresConfig();

server.post('/enderecos', async (resquest, replay) => {
    const { logradouro, descricao, cidade, estado, rota } = resquest.body
    await db.create({ logradouro, descricao, cidade, estado, rota })
    return replay.status(201).send()
})
server.get('/enderecos', async () => {
    return await db.list()
})
server.put('/enderecos/:id', (resquest, replay) => {
    const enderecoID = resquest.params.id
    const { logradouro, descricao, cidade, estado, rota } = resquest.body
    db.update(enderecoID, { logradouro, descricao, cidade, estado, rota })
    return replay.status(204).send()
})
server.delete('/enderecos/:id', () => {
    const enderecoID = resquest.params.id
    db.remove(enderecoID);
    return replay.status(204).send();
})
server.get('/buscar', (resquest) => {
    const search = resquest.query.search;
    const enderecosList = db.filter(search);
    return enderecosList;
})
server.listen({
    host:'0.0.0.0',
    port: process.PORT ?? 5555,
})