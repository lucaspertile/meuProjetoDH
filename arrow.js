
//dizendo olá
let digaOla = nome => `Olá mestre do magos ${nome}`

console.log(digaOla('Lucas'))

//MULTIPLICANDO

let multiplicador = (numA, numB) => {
    return numA * numB
} 

console.log(multiplicador(2,3))

// É PAR?

let ePar = num => {
   if(num % 2 >=0){
       console.log("É Par")
   }else{
       console.log("É impar")
   }
}
ePar(3)

// SOMAR
let somar = (n1, n2) => {
    return n1 + n2
}

console.log(somar(2,1))