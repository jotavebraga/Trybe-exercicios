// const books = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//       },
//       releaseYear: 1991,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: {
//         name: 'J. R. R. Tolkien',
//         birthYear: 1892,
//       },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Isaac Asimov',
//         birthYear: 1920,
//       },
//       releaseYear: 1951,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Frank Herbert',
//         birthYear: 1920,
//       },
//       releaseYear: 1965,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: {
//         name: 'Stephen King',
//         birthYear: 1947,
//       },
//       releaseYear: 1986,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: {
//         name: 'H. P. Lovecraft',
//         birthYear: 1890,
//       },
//       releaseYear: 1928,
//     },
//   ];
  
// //   // Adicione o código do exercício aqui:
// //   const expectedResult = false;

// function authorUnique(books) {
//   return books.every((book)=> books.some((bookSome)=> bookSome.author.birthYear === book.author.birthYear && bookSome.author.name !== book.author.name));  
// }
// console.log(authorUnique(books));

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false


// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (names, name) => {
//     return names.some((element) =>{
//         return (element === name);
//     })
    
 
// }

// console.log(hasName(names, 'lllllllll'))

// const people = [
//     { name: 'Mateus', age: 19 },
//     { name: 'José', age: 19 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
// //   Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((element)=>{
//         console.log(element.age)
//         console.log(minimumAge)
//         return minimumAge <= element.age;
//     })
//   }
  
//   console.log(verifyAges(people, 18));
const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
  ];

  // Questão - Encontrar o primeiro elemento que não pode dirigir

// const primeiroQueNaoDirige = (array) => {
//     const nunDriver = [];
//     array.forEach((element)=>{
//         if(element.isDriver === false){
//             nunDriver.push(element);
//         }
//     })
//     return nunDriver;
  
// }

// console.log(primeiroQueNaoDirige(users));

// const primeiroQueNaoDirige = (users) => {
//     return users.find((user) => {
//       return user.isDriver === false;
//     })
//   }
//   console.log(primeiroQueNaoDirige(users));
  const primeiroQueNaoDirige = (array) => {
    const naoDirige = [];
    for (let i = 0; i < array.length; i += 1) {
    if (array[i].isDriver === false) {
      naoDirige.push(array[i]);
    }
  }
  return naoDirige;
  
}
console.log(primeiroQueNaoDirige(users));