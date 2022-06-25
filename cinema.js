var cinema = "cinemaLucas"
console.log(cinema)

var catalogo = []
catalogo[0] ={
    codigo: 1,
    titulo: "Homem de Ferro",
    duracao: 3,
    atores: ["Robert Downey", "Jon Favreau"],
    anoDeLancamento: 2010,
    emCartaz: true
  
}

catalogo[1] = {
    codigo: 2,
    titulo: "Hulk",
    duracao: 2,
    atores: ["João", "Maria"],
    anoDeLancamento: 2000,
    emCartaz: false
}

//console.log(catalogo)
function adicionarFilme (codigo, titulo, duracao, atores, ano, emCartaz){
    catalogo.push({
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoLancamento: ano,
        emCartaz: emCartaz
    })
}

adicionarFilme (3, "Capitao America", 1.8, ["Peterson"], 2022, true);
//console.log(catalogo)

function buscarFilme (){
    return catalogo.codigo.indexOf()
    

}
buscarFilme(0)