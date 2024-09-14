import { randomUUID } from 'node:crypto'
import { sql } from './sql.js'
export class DataBasePotgresConfig {

    async create(endereco) {
        const enderecoID = randomUUID()
        const {logradouro, descricao, cidade, estado, rota } = endereco
        await sql`insert into endereco(enderecoID,logradouro, descricao, cidade, estado, rota)  values (${enderecoID},${logradouro},${descricao},${cidade},${estado},${rota}) `
    }
    async list() {
        const enderecos = await sql`select * from endereco`;
        return enderecos;

    }
    async filter(search) {
        let enderecos;
        if (search) {
            enderecos = await sql`select * from endereco where logradouro ilike ${'%'+search+'%'}`;
        }
        else {
            enderecos = await sql`select * from endereco`;
        }
        return enderecos;
    }
    update(id, endereco) {

    }
    remove(id) {

    }
}