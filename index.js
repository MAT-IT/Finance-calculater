// Financial Analysis

console.log("Financial Analysis");
console.log("----------------------------");

// The total number of months included in the dataset

var totalMonths = finances.length;
console.log("Total Months: " + totalMonths);

// The net total amount of Profit/Losses over the entire period

var totalProfitLoss = 0 ;
for (let i = 0; i < finances.length; i++) {
  
  totalProfitLoss += finances[i][1]
  
}
console.log("Total: $" + totalProfitLoss);

// The average of the changes in Profit/Losses over the entire period
var totalChange = 0;
for (var i = 1; i < finances.length; i++) {
    totalChange += finances[i][1] - finances[i - 1][1];
}
var averageChange = totalChange / (totalMonths - 1);
console.log("Average Change: $" + averageChange.toFixed(2));

// The greatest increase in profits (date and difference in the amounts) over the entire period
var maxIncrease = 0;
var maxIncreaseDate = 0;

for (var i = 1; i < finances.length; i++) {
  var lastIncrease = finances[i][1] - finances[i - 1][1];
  var lastIncreaseDate = finances[i][0]
  if (lastIncrease>maxIncrease) {
    maxIncrease = lastIncrease;
    maxIncreaseDate=lastIncreaseDate

  }
}

console.log("Greatest Increase in Profits/Losses : " + maxIncreaseDate + " ($" + maxIncrease + ")");

// The greatest decrease in losses (date and difference in the amounts) over the entire period

var maxDecrease = 0;
var maxDecreaseDate = 0;

for (var i = 1; i < finances.length; i++) {
  var lastDecrease = finances[i][1] - finances[i - 1][1];
  var lastDecreaseDate = finances[i][0]
  if (lastDecrease<maxDecrease) {
    maxDecrease = lastDecrease;
    maxDecreaseDate=lastDecreaseDate

  }
}
console.log("Greatest Decrease in Profits/Losses : " + maxDecreaseDate + " ($" + maxDecrease + ")");
  
  