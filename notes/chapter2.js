console.log('hello world')

scentence = "hello Aurora"
console.log(scentence) //comment 


numberOfEggs = 5 

let totalNumberOfGroceries = numberOfEggs

numberOfEggs =10 

console.log(totalNumberOfGroceries)

//dictionary
let friends = {
    james: 'is super cool',
    lucy: 'not so cool',
    numberOfEggs: scentence
}

console.log(friends)

//array
let exampleArray = [1,2,3,4,5]

console.log(exampleArray[1])


//functions
let isTrue = true

function myFirstFunction() {
    //output the value of isTrue
    console.log(isTrue)
    
    //output the value of exampleArray
    console.log(exampleArray)
}

myFirstFunction()
console.log(myFirstFunction)

function mathFunction(first, second) {
    console.log(first + second)
}

mathFunction(1,2)

let addTwoNumbers = mathFunction
addTwoNumbers(8,4)

// logic operators: and, or and not

//also we have typeof


//if/ else if/ else statements

//loops 

function addStrings(s1,s2) {
    console.log(s1 , s2)
    console.log(s1 + s2)
    console.log(s1 + " " + s2) //konkatinerer strenger

}

addStrings('hello', 'world')


function addStrings2 (s1 = "default1",s2 = "default2") {
    let concatString = s1 + " " + s2
    console.log(concatString)
    return concatString
}

let newString = addStrings2("hello")
console.log("the new string is: ",newString)
