//IF TERNARIO
// COMER PASTEL?

let diaDePastel = "terça";
let resultado = diaDePastel == "Sábado" ? "Bora comer pastel" : "Bora comer saladinha"

console.log(resultado);

//DIA DE CROSS

let dia = "quarta";
let diaDeCross = dia == "terça"? "bora pro cross" : "bora pra academia"
console.log(diaDeCross);

// SWITE
//O QUE FAZER NOS DIAS DA SEMANA?

let dSemana = "quarta"
switch(dSemana){
    case "segunda":
        console.log("Aula de prog")
        break
    case "terça":
        console.log("Cross")
        break
    default:
        console.log("tomar uma")
}





//EXECICIO II

let diab = "terça";

function fimDeSemana(diab){
	switch(diab){
		case "segunda":
			console.log("você tem aulas!")
			break
		case "quarta":
			console.log("você tem aulas!")
			break
		case "sexta":
			console.log("você tem aulas!")
			break
		default:
			console.log("você não tem aulas")
	}
}

fimDeSemana(diab)

// EXERCICIO III


let diaC = "sexta-feira"

function fimDeSemana(diaC) {
    switch(diaC){
        case "sexta-feira":
            console.log('Bom fim de semana!');
            break
        case "segunda-feira":
            console.log('Boa semana!');
            break
        default:
            console.log('Bom dia!');
            
    }
}

