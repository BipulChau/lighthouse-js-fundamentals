const amounts = [61.00, 52.25, 112.99, 5.00];
let total=0;
for (i = 0; i < amounts.length; i++){
  total+=amounts[i];
}
console.log('Order total is '+total);

const expenses = [900, 260, 200, 100, 400];
let totalExpenses = 0;
for (let expense of expenses){
  totalExpenses += expense;
}
console.log("My total monthly expenses is ", totalExpenses);
console.log("In 4 months total expenses will be ", `${totalExpenses*3}`);
