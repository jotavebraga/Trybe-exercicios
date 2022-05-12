// 1 questao
// const a = 10;
// const b = 20;
// const c = 30;

// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log (a / b);
// console.log (a % b
    
// 2 questao
// if (a > b) {
//     console.log ("'a' é maior que 'b' ");
// }
// else {
//     console.log ("'b' é maior que 'a'");
// }

// // 3 questao
// if (a > b && a > c) {
//     console.log ("'a' é o maior numero");
// }
// else if (b > a && b > c) {
//     console.log ("'b' é o maior numero");
// }
// else {
//     console.log ("'c' é o maior numero");
// }

// 4 questao
// const numero = 27

// if (numero > 0) {
//     console.log("numero positivo");
// }
// else if (numero < 0) {
//     console.log("numero negativo");
// }
// else (
//     console.log ("0");
// )

// 5 questao
// const anguloA = 30;
// const anguloB = 100;
// const anguloC = 50;
// const somaDosAngulos = anguloA + anguloB + anguloC;
// const angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

// if (angulosPositivos === true) {
//     if (somaDosAngulos === 180) {
//         console.log ("positive");
//     }
//     else {
//         console.log ("negative");
//     }
// }
// else {
//     console.log("erro")
// }

// 6 questao 
// const pecaXadrez = "torre"


// switch (pecaXadrez.toLowerCase()) {
//     case "bispo":
//         console.log ("anda nas diagonais");
//         break;
//     case "rainha":
//         console.log ("anda para qualquer lugar no tabuleiro");
//         break;
//     case "rei":
//         console.log ("anda para qualquer casa adjacente");
//         break;
//     case "torre":
//         console.log ("anda para vertical e horizontal");
//         break;
//     case "cavalo":
//         console.log ("anda em 'L' no tabuleiro");
//         break;
//     case "peão":
//         console.log ("anda apenas na horizontal");
//         break;
//     default:
//         console.log ("peça invalida");
//         break
// }

// questao 7
// const nota = 95;
// if (nota > 100 || nota < 0){
//     console.log("erro");   
// }
// else if (nota >= 90){
//     console.log("A");
// }
// else if (nota >= 80){
//     console.log("B");
// }
// else if (nota >= 70){
//     console.log ("C");
// }
// else if (nota >= 60) {
//     console.log ("D");
// }
// else if (nota >= 50) {
//     console.log ("E");
// }
// else {
//     console.log("F");
// }

// questao 8
// const n1 = 1;
// const n2 = 50;
// const n3 = 3;

// if (n1 %2 === 0 || n2 %2 ===0 || n3 %2 ===0){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// questao 9
// const n1 = 3;
// const n2 = 10;
// const n3 = 32;

// if (n1 %2 > 0 || n2 %2 > 0 || n3 %2 > 0) {
//     console.log("impar")
// }
// else {
//     console.log("par")
// }

// questao 10
const custoProduto = 7;
const valorVenda = 23;

if(custoProduto >= 0 && valorVenda >= 0) {
    const valorTotal = custoProduto * 1.2;
    const lucro = valorVenda - valorTotal;
    const lucroTotal = lucro * 1000;
    console.log(lucroTotal);
}
else {
    console.log("erro")
}