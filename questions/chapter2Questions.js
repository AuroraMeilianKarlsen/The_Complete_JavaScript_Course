// task 1
let name = "Aurora"
name = "Aurora Karlsen"

console.log(name) //printer Aurora Karlsen

//task 2
let a = 4 
let b = 4

function checkIfEqual (a,b) {
    if (a==b) {
        return console.log("a and b are equal")
    }
    else {
        return console.log("a and b are not equal")
    }
}
checkIfEqual(a,b)

console.log(a==b) //printer true/ false

//task 3
let age = 18 

if (age => 18) {
    console.log("Adult")
}
else {
    console.log("Minor")
}

//task 4 
let arrayToTen = [0,1,2,3,4,5,6,7,8,9,10]

for (i in arrayToTen) { //funger kun om arrayen starter på 0 
    if (i%2 ==0) {
        console.log(i)
    }
}

let arrayLength = arrayToTen.length
for (let i = 0; i < arrayLength; i++) {
    let currentValue = arrayToTen[i]
    let isEven = currentValue % 2 == 0
    if (isEven) {
        console.log(currentValue)
    }
}

//task 5
arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let sum = 0 
let index = 0

while (sum + arrayOfNumbers[index] < 100 ) {
    let currentNumber = arrayOfNumbers[index]
    sum += currentNumber
    index++
}

console.log(sum)

//task 6
function calculatedArea (widt,height) {
    let area = widt * height
    return area
}

let area1 = calculatedArea(3,5)
let area2 = calculatedArea(10,20)
console.log("calculated area is: " + area1)
console.log("calculated area is: " + area2)