import Aluno from "./model/Aluno.js";
import Professor from "./model/Professor.js";
import Pessoa from "./model/Pessoa.js";

const pessoa = new Pessoa("João", 25);
console.log(pessoa);

const aluno = new Aluno("Aprender a programar", "Turma A");
console.log(aluno);

const professor = new Professor("Programação");
console.log(professor);

