const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
    const personlikes = (person) =>{
      const {name, age, likes} = person;
      return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  }
  console.log(personlikes(alex));
  console.log(personlikes(gunnar));