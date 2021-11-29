// let array = [1, 2, 3, 4, 5]

// let lastDeletedNumber = array.pop()
// let firstDeletedNumber = array.shift()

// array.push(6)
// array.unshift(0)

// console.log(array);
// console.log(lastDeletedNumber);
// console.log(firstDeletedNumber);

// let oneThousandNumbers = []

// for (let index = 0; index < 1000; index++) {
//     oneThousandNumbers.push(index)
// }

// for (let index = 0; index < oneThousandNumbers.length; index++) {
//     console.log(oneThousandNumbers[index]);
// }

// console.log(oneThousandNumbers);

// let stringWithNumbers = "1234567890"
// console.log(stringWithNumbers);

// let arrayWithNumbers = stringWithNumbers.split('').reverse().join(' ')
// console.log(arrayWithNumbers);

// let array = [1, 2, 3, 4, 5]

// array.splice(0, 3, 'first', 'second', 'third')

// console.log(array);

// let array = [5, 11, 4, 3, 7, 2, 8]

// let newArray = array.concat([4, 6, 10]) //[5, 11, 4, 3, 7, 2, 8, 4, 6, 10]

// console.log(newArray.indexOf(4, 3))

// let evenNumbers = array.filter(function (number) {
//     return number % 2 === 0
// })

// array.sort(function sortCallback(a, b) {
//     return a - b
// })

// console.log(evenNumbers);

let numbers = []

for (let i = 1; i <= 1000000; i++) {
    numbers.push(i)
}

let result = numbers.reduce((acc, curr) => {
    acc = acc + curr
    return acc
})

console.log(result);