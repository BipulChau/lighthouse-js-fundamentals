function concat (researcher1, researcher2) {
  let combine= researcher1;
  for (let data of researcher2){
    combine.push(data);
  }return combine;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));	