const judgeVegetable = function (vegetables, metric){
  let score = 0;
  let winner;
  for ( let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > score){
      score = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  } return winner;
}

const fruits = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const points = 'redness'

console.log (judgeVegetable(fruits, points));