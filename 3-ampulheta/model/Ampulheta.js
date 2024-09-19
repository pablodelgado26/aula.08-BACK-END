class Ampulheta {
    nomePessoa;

    constructor(nomePessoa) {
    this.nomePessoa = nomePessoa;
    }

    pausar(tempoMs) {
    const espera = Date.now();
    console.log(
        `${this.nomePessoa} passou pela primeira camada do tempo em ${espera}.`
    );
    while (Date.now() - espera < tempoMs) {}
    console.log(`E retornou ao presente no tempo de ${Date.now()}.`);
    }

    voltarNoTempo() {
    const inicioTempo = Date.now();
    console.log(`${this.nomePessoa} voltou no tempo...`);

    this.pausar(3000);
    this.pausar(6000);

    const fimTempo = Date.now();
    const tempoTotal = (fimTempo - inicioTempo) / 1000;
    console.log(
        `E o tempo total gasto foi: ${tempoTotal} segundos.\nE salvou o Padrinho do Harry Potter!`
    );
    }
}

export default Ampulheta;
