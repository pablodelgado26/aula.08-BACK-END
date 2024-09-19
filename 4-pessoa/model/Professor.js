import Pessoa from './Pessoa.js';

class Professor extends Pessoa {
    especialidade;
    
    constructor(especialidade, nomePessoa, idadePessoa) {
        super(nomePessoa, idadePessoa);
        this.especialidade = especialidade;
    }
}

export default Professor;