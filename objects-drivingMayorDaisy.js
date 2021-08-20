const carPassing = function (cars, speed){
  let newCars = {time : Date.now(),
    speed : speed
  } 
  cars.push(newCars);
  return cars;
}

let vehicle= [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

let fast = 38;

console.log(carPassing(vehicle, fast));
