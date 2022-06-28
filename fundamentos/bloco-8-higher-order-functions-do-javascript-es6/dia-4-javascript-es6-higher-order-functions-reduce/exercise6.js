const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage(array,array2) {
//     return array.map((element,index)=>{
//         return `name: ${element}:${array2[index]}`
//     })
// }

function studentAverage(array,array2) {
    
    
    const nameAndAverage = array.map((element,index)=>({
         name: element,
         average: array2[index].reduce((acc,curr)=> acc + curr, 0) / array2[index].length
         
    }));
    
    return nameAndAverage;
}

console.log(studentAverage(students,grades));
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];