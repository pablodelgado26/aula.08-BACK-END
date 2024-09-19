import Aluno from "./model/Aluno.js";
import Professor from "./model/Professor.js";
import Pessoa from "./model/Pessoa.js";

const pessoa = new Pessoa("Pereira", 16);
const aluno = new Aluno("Aprender a programar", "DS2", "Rocha", 16);
const professor = new Professor("Programação BACK-END", "Felipe Dev", 32);

console.log(pessoa);
console.log(aluno);
console.log(professor);