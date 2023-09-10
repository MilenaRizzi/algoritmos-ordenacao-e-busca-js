const menorValor = require('./menorValor');
const livros = require('./listaLivros');

function selectionSort(livros) {
    for (let atual = 0; atual < livros.length; atual++) {
        let menor = menorValor(livros, atual);

        let livroAtual = livros[atual]
        let livroMenorPreco = livros[menor];

        livros[atual] = livroMenorPreco;
        livros[menor] = livroAtual;
    }

    return livros;
}


console.log(selectionSort(livros));