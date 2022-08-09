const num = Number(prompt('Digite um número'))

// IF ANINHADOS

// if (num % 2 === 0) {
//     if (num % 3 === 0) {
//         alert('Seu número é divisivel por 2 e por 3')
//     }
// } else {
//     alert('Seu número não é divisivel por 2 e por 3')
// }

// OPERADOR LÓGICO

if (num % 2 === 0 || num % 3 === 0) {
    alert('Seu número é divisivel por 2 ou por 3')
} else {
    alert('Seu número não é divisivel por 2 ou por 3')
}

