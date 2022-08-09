let nacionalidade = (prompt("Escreva aqui sua nacionalidade")).toLowerCase()

// if(nacionalidade === "brasileira" || nacionalidade === "brasileiro"){
//     alert("A pessoa é um(a) "+ nacionalidade)
// }else if(nacionalidade === "argentina" || nacionalidade === "argentino"){
//     alert("A pessoa é um(a) "+ nacionalidade)
// }else if(nacionalidade === "uruguaia" || nacionalidade === "uruguaio"){
//     alert("A pessoa é um(a) "+ nacionalidade)
// }else if(nacionalidade === "chilena" || nacionalidade === "chileno"){
//     alert("A pessoa é um(a) "+ nacionalidade)
// }else if(nacionalidade === "colombiana" || nacionalidade === "colombiano"){
//     alert("A pessoa é um(a) "+ nacionalidade)
// }else{
//     alert("Nacionalidade não encontrada")
// }

switch(nacionalidade){
    case 'brasileira':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'brasileiro':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'argentina':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'argentino':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'uruguaia':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'uruguaio':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'chilena':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'chileno':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'colombiana':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    case 'colombiano':
        alert("A pessoa é um(a) "+ nacionalidade)
        break
    default:
        alert("Nacionalidade não encontrada")
}