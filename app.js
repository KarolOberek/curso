const prompt = require('prompt-sync')();
const {criar, listar, atualizar, remover} = require ("./curso")
console.log("Digite uma opção:\ncriar\nlistar\natualizar\nremover\n")
const opcao = prompt();

switch (opcao) {
    case 'criar':
        criar()
        break;
    case 'listar':
        listar;
        break;
    case 'atualizar':
        atualizar;
        break;
    case 'remover':
        remover;
        break;
    default:
        console.log("Opção inválida. Digite outra opção:\ncriar\nlistar\natualizar\nremover\n")
        opcao = undefined
}