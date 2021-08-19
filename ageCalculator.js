function ageCalculator (name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.")
}

console.log(ageCalculator("Madhu", 1992, 2021));
console.log(ageCalculator("Bipul", 1986, 2021));


