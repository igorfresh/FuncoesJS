function SomaNumeros (a, b) {
    console.log (' A soma deu como resultado', a + b)
}

SomaNumeros(3, 4)
SomaNumeros (6, 17)


const Multiplica = (c , d) => c * d

console.log( 'A multplicação deu como resultado', Multiplica(2, 3))

function Multplica1 (e, f) {
    console.log ('A multiplicação deu como resultado', e * f)

}

Multplica1(7, 3)
Multplica1(5, 30)

function Divisao (g, h) {
    console.log('A divisão deu como resultado', g / h)
}
Divisao(30, 5)
Divisao(50, 10)

const Divisao1 = (i, j) => i / j

console.log('A divisão deu como resultado', Divisao1(27, 2))

function UmaContaDoida ( w, x, y, z) {
    console.log ('O resultado desta conta será', w / x * y + z)
}

UmaContaDoida(34, 5, 7, 9)
UmaContaDoida(74, 23, 4.5, 28)

const pokemons = ['fuecoco', 'springalito', 'quaxly']
const digimons = ['agumon', 'antedegemon']

pokemons.forEach(ImprimeNomes);
pokemons.forEach(ImprimeNomes);

function ImprimeNomes (item, index) {
    console.log(index, ';', item)
}

let nome = "Kakashi";
console.log(nome, 'tem', nome.length, 'letras')


let Declaracao = 'Eu amo aulas de programção mobile'
function replace (antigo, novo) {
    console.log(Declaracao.replace(antigo, novo))
}

replace ('aulas', 'professores')


