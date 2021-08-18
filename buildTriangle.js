function makeLine (length) {
  var line = '';
  for (var j = 1; j <= length; j++){
    line+='*'
  }
  return line +'\n';
}

let triangle=''
function buildTriangle(rows){
  for (var i = 1; i <= rows; i++){
    triangle+= makeLine(i);
  }
  return triangle
}

console.log(buildTriangle(10));
