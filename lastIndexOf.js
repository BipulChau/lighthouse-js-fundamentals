function lastIndexOf (arrayFile, value){
  for (let i = arrayFile.length - 1; i >= 0; i--) {
    if (arrayFile[i] === value) {
      return i;
    }
  } return -1;//not included inside for loop because if included it will give -1 for any element which is not at the last of array
}
  
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 2, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 5, 1, 4, 1, 2 ], 5));
console.log(lastIndexOf([ 5, 5, 5 ], 5))