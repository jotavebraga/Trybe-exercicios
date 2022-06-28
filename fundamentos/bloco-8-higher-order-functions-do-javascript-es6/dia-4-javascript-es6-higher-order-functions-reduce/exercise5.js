const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    // escreva seu código aqui
    return array.reduce((acc, curr)=>{
        return acc + curr.split('').reduce((acc, curr)=>{
            if(curr === 'a' || curr === 'A'){
                return acc + 1
            } return acc
        },0)
        
    },0)
  }
  console.log(containsA(names));