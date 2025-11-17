/**** Escreva o código abaixo 👇******/
/*1° questão */
function somar(a, b){
  return a+b
}
const resultad01 = somar (5, 4);
console.log(`A soma de 5 e 4 é:${resultado1}`);

/*2° questão */
function multiplicar(a, b){
  return a*b
}

const resultado2 = multiplicar(3, 5 );
console.log(`A multiplicação de 3 e 5 é: ${resultado2}`);

/*3° questão */
function subtrair(a, b){
  return a-b
}

const resultado3 = subtrair(3, 2)
console.log (`A subtração de 3 e 2 é: ${resultado2}`);

/*4° questão */
function dividir(a, b){
  if (b === 0) {
    return "Erro: divisão por zero";
  } else {
    return a / b;
  }
}

const resultado4 = dividir(8, 2)
console.log (`A subtração de 8 e 2 é: ${resultado4}`);

/*5° questão */
function calcularMedia(nota1, nota2, nota3, nota4){
  return nota1+nota2+nota3+nota4/4
}

const resultado5 = calcularMedia(3, 2)
console.log (`A subtração de 3 e 2 é: ${resultado5}`);

/*6° questão */
function elevarPotencia(a, b){
  return a**b
}

const resultado6 = elevarPotencia(3, 2)
console.log (`A subtração de 3 e 2 é: ${resultado6}`);

/*7° questão */
function calcularAreaRetangulo(a, b){
  return a*b
}

const resultado7 = calcularAreaRetangulo(3, 2)
console.log (`A subtração de 3 e 2 é: ${resultado7}`);

/*8° questão */
function verificarParOuImpar(a, b){
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

const resultado8 = verificarParOuImpar(14);
console.log(`O número 14 é: ${resultado8}`);

const resultado9 = verificarParOuImpar(7);
console.log(`O número 7 é: ${resultado9}`);

/*9° questão */
function calcularRaizQuadrada(a){
  return Math.sqrt(a)
}
console.log("Raiz quadrada de 9:", calcularRaizQuadrada(9));

/*10° questão */
function calcularHipotenusa(cateto1, cateto2){
  const cateto1Quadrado = elevarPotencia(cateto1, 2);
  const cateto2Quadrado = elevarPotencia(cateto2, 2);
  const somaDosQuadrados = somar(cateto1Quadrado, cateto2Quadrado);
  const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);
  return hipotenusa;
}
console.log("Catetos (3, 4). Hipotenusa:", calcularHipotenusa(3, 4));
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
