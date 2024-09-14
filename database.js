import {randomUUID} from 'node:crypto'

export class DataBase {
    #enderecos = new Map()
    create(endereco) {
        const enderecoID = randomUUID()
        this.#enderecos.set(enderecoID, endereco)
    }
    update(IDendereco,endereco) {
        this.#enderecos.set(IDendereco, endereco)
    }
    remove(IDendereco) {
        this.#enderecos.delete(IDendereco)
    }

    list(){
        return Array.from(this.#enderecos.entries()).map((endereco)=>{
            const id = endereco[0]
            const data = endereco[1]
            return {
                id,
                ... data
            }
        });
    }


    filter(search){
        return Array.from(this.#enderecos.entries())
        .map((endereco)=>{
            const id = endereco[0]
            const data = endereco[1]
            return {
                id,
                ... data
            }
        })
        .filter(endereco=>{
            if(search){
                return endereco.logradouro.includes(search)
            }
            return true
        })
    }

}