const sum = (...args) => {
    return args.reduce((acc,curr) =>{
        return acc + curr
    },0)
}
console.log(sum(10,21,34,53,34,53,465,56));
