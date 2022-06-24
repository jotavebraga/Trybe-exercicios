// FIXAR FOREACH 

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach((email)=>{
//     showEmailList(email);
//   })

//   FIXAR FIND 
// FIXAR 1 
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (array) => {
//   // Adiciona seu código aqui
// return array.find((number)=>{
//     return number % 3 === 0 && number % 5 === 0;
// })
// }

// console.log(findDivisibleBy3And5(numbers));

// FIXAR 2
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (names) => {
//   // Adicione seu código aqui:
//     return names.find((name)=> name.length === 5);
// }
// console.log(findNameWithFiveLetters(names)); 

// FIXAR 3 

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     // Adicione seu código aqui
//     return musicas.find((musica)=> musica.id === '31031685')
//   }
  
//   console.log(findMusic(musicas));

//   FIXAR EVERY
// FIXAR 1
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some((element)=> element === name);
// }

// console.log(hasName(names, 'Ana'));
// FIXAR 2
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((element)=> element.age >= minimumAge);
//   }
  
//   console.log(verifyAges(people, 18));

// FIXAR SORT 
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   // Adicione se código aqui
//   people.sort((elementA, elementB)=> elementA.age - elementB.age);
  
//   console.log(people);