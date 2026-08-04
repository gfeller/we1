Promise.resolve(3)
  .then(num => num * 2)
  .then(result => console.log(result));

  
const x = await Promise.reject('1')
console.log(x);


Promise.reject( '1')
    .catch(err => console.log(err))
    .then(() => {
        console.log('2');
        return Promise.reject('3');
    })
    .then(() => console.log('4'))
    .catch(err => console.log(err));