import Pessoa from './Pessoa.js';

class Aluno extends Pessoa {
    objetivoAluno;
    turmaAluno;
    constructor (objetivoAluno, turmaAluno, nomePessoa, idadePessoa) {
        super(nomePessoa, idadePessoa);
        this.objetivoAluno = objetivoAluno;
        this.turmaAluno = turmaAluno;
    }
}

export default Aluno;