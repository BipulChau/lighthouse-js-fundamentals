const raining=false;
let cold=true;

if (raining){
  console.log("Don't forget your umbrella.");
}

if (cold){
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you are ready to go outside.");

cold=false;
if (cold){
  console.log("Make sure you pick out a scarf.");
} else{
  console.log("Short sleeves are fine.");
}

let temperature=-43;
if (temperature<0){
  console.log("Make sure you pick out a scarf.");
} else if (temperature<15){
  console.log("Short sleeves won't cut it.");
} else{
  console.log("Short sleeves are fine.");
}

console.log("Now you are ready to go outside.");

const isCitizen=true;
const age=35;

if (isCitizen && age>18){
  console.log("You are eligible to vote.");
}


if (temperature<-40 || temperature>40){
  console.log("May be going outside is not such a great idea.");
}

if (!raining){
  console.log("Leave your umbrella at home.");
}






