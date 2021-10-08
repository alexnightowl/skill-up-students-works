let number = 15
let string = "123.50test"
let bin = true

let student = {
    name: "Alex",
    surname: "Kolesnik",
    age: 23,
    course: "Fron End",
    city: "Vinnitsya"
}

student.nationality = "Ukrainian"
student.age = 24

// console.log(student)

const arrayNames = ["Alex", 10, "Lana", student]
// console.log(arrayNames);

function getSumma(a, b) {
    console.log('Сейчас добавлю два числа')
    return a + b
}

getSumma(10, 20)

let apples = 10
let watermelons = 15

let fruits = getSumma(apples, watermelons)
console.log(fruits);





