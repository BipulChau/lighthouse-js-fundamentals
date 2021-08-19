const finalPosition = function (moves) {
  let currentPosition = [0, 0]
  for (let move of moves){
    if (move === "east") {
      currentPosition [0] += 1;
    } else if (move === "west"){
      currentPosition [0] -= 1;
    } else if (move === "north"){
      currentPosition [1] += 1;
    } else {
      currentPosition [1] -= 1;
    };
  }; return currentPosition;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
console.log(finalPosition(moves));
