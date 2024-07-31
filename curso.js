const prompt = require('prompt-sync')();
const cursos = [];

const modelo = () => {
    const nome = prompt("Digite o nome do curso: ");
    const duracao = prompt("Digite a duração do curso: ");

    const professores = [];
    while (true) {
        const professor = prompt("Digite o nome dos professores, ou digite 'fim' para sair do processo: ");
        if (professor === "fim") {
            break;
        }
        professores.push(professor);
    }

    const alunos = [];
    while (true) {
        const aluno = prompt("Digite o nome dos alunos, ou digite 'fim' para sair do processo: ");
        if (aluno === "fim") {
            break;
        }
        alunos.push(aluno);
    }

    const materias = [];
    while (true) {
        const materia = prompt("Digite o nome das matérias, ou digite 'fim' para sair do processo: ");
        if (materia === "fim") {
            break;
        }
        materias.push(materia);
    }

    if (nome !== "" && duracao > 0 && professores.length > 0 && alunos.length > 0 && materias.length > 0) {
        return { nome, duracao, professores, alunos, materias };
    }
    console.log("Dados inválidos");
};

const criar = () => {
    const novo = modelo();
    if (novo) {
        cursos.push(novo);
        console.log("Curso criado com sucesso");
    }
};

const listar = () => {
    if (cursos.length === 0) {
        console.log("Nenhum curso criado ainda.");
    } else {
        cursos.forEach((el, i) => {
            console.log(`${i + 1}. 
                Nome: ${el.nome}, 
                Duração: ${el.duracao}, 
                Professores: ${el.professores.join(", ")}, 
                Alunos: ${el.alunos.join(", ")}, 
                Matérias: ${el.materias.join(", ")}`);
        });
    }
};

const atualizar = () => {
    listar();
    const indice = prompt("Qual o índice que deseja atualizar? ") - 1;
    const novo = modelo();

    if (novo && indice >= 0 && indice < cursos.length) {
        cursos[indice] = novo;
        console.log("Curso atualizado com sucesso");
    } else {
        console.log("Índice inválido");
    }
};
const remover = () => {
    listar ()
    const indice = prompt("Qual o indice que deseja remover?")

    if (indice >= 0 && indice < cursos.length){
        cursos.splice(indice, 1)
        console.log("Registro removido com sucesso!")
    } else {
        console.log("Indice inválido")
    }
}
module.exports = {
    criar,
    listar,
    remover,
    atualizar
}