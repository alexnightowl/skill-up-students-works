// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrayNames = ["Alex", "Anton", "Andrey", "Anna", "Anatoliy", "Petr", "Stanislav"];

// const result = arrayNames.map(function(item) {
//     return `Hello ${item}`
// })

// const evenNumbers = arrayNumbers.filter(function(number) {
//     return number % 2 === 0
// })

// const namesResult = arrayNames.filter(function(name) {
//     return name.includes("A") && name.length > 4
// })

// const namesResultFind = arrayNames.find(function(name) {
//     return name.includes("A") && name.length > 4
// })

// const namesResultIndex = arrayNames.findIndex(function(name) {
//     return name.includes("A") && name.length > 4
// })

// const isArrayItemsNumber = arrayNumbers.every(function(item) {
//     return Number.isInteger(item)
// })

// const hasArrayNumber = arrayNames.some(function(item) {
//     return Number.isInteger(item)
// })

// const testArray = []
// for(let i = 1; i <= 117000; i++) {
//     testArray.push(i)
// }

// console.log(testArray);

// const sumOfArray = testArray.reduce(function(acc, curr) {
//     acc = acc+curr
//     return acc
// })

// console.log(sumOfArray);

function howManydays(month) {
  var days;
  switch (month) {
    case 1 || 3 || 5 || 7 || 8 || 10 || 12:
      return 31;
      break;
    case 4 || 6 || 9 || 11:
      return 30;
      break;
    case 2:
      return 28;
      break;
  }
  return days;
}

const result = howManydays(5);
console.log(result);
