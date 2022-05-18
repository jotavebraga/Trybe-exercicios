// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info.recorrente = 'sim'

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim'
//   }
//   console.log(info);

// for(let index in info){
//     console.log(info);
// }

// for (let index in info){
//     let frase1 = console.log(info[index]);
// }

// for(let index in info){
//     if (index === "recorrente" && info[index] === "sim" && info2[index] === "sim"){
//         console.log("ambos recorrentes");
//     } else {
//         console.log(info[index] + " e " + info2[index]);
//     }
// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// //   console.log("O livro favorito de ", leitor.name + leitor.sobrenome + "se chama, " + leitor.livrosFavoritos[0].titulo);

//   leitor.livrosFavoritos.push({titulo:'Harry Potter e o Prisioneiro de Azkaban', autor:'JK Rowling', editora: 'Rocco'})

//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');



// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

    // function verificadorPalindromo(palavra) {
    //     for (let index in palavra){
    //         if(palavra[index] != palavra[(palavra.length - 1) - index]){
    //             return false;  
    //         }
    //     }
    //     return true;
    // }
    

    function indiceDoMaior(numeros) {
        let indiceMaior = 0;
        for (let indice in numeros) {
          if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
          }
        }
        return indiceMaior;
      }
      console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]))


    



