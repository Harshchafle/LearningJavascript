
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//console.log("hello");
/*
Stack (Primitive), Heap (Non-primitive)
let name = "Harsh";          // primitive datatype which will store in Stack
let user1 = {                // Non-primitive store in Heap
  email : "chafleharsh@gmail.com,
  upi : harsh@ybl
}
let user2 = user1;
user2.email = "something@gmail.com"
console.log("User1.email")
console.log(""user2.email)
                            // both will have same value of email as next updated email
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Strings
const name = "Harsh-HC"
const work= "Learning Javascript"
console.log(name+" is "+work);

//String interpolation
let age = 20
console.log(`Hello my name is ${name.toUppercase()} and my age is ${age}. i am learning ${work}`)

const gameName = new String(`clash-Of-Clans`)
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.charAt(7))
console.log(gameName.indexOf(`s`))

const newString = gameName.substring(0,5) // cant starrt form negative index
console.log(newString)

const sliceString = gameName.slice(-4,4) //can start from negative index
console.log(sliceString)

const trimString = `     Harsh       `
console.log(trimString)
console.log(trimString.trim())

//browser dont understand spaces in urls so we use %20 like symbols
const url = "https://harsh.com/harsh%20chafle"
console.log(url.replace('%20', '-')
console.log(url)

//we can ask String wheather it includes specific char or words or not
console.log(url.includes('harsh')  /returns boolean value

//we can separate the string on the basis of particular character like space or others
//basically we can create an array of strings
console.log(gameName.split('-')


















//Strings are immutable









