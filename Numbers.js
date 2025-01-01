const balance = new Number(100)
// console.log(typeof(balance))

// console.log(balance.toFixed(2))
// console.log(balance.toString().length)

var num = 23.125
// console.log(num.toPrecision(4))

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN')) // -> inset commas locally

// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)

//+++++++   Math    +++++++
/* console.log(
    Math.hypot(3,4),"\n",
    Math.sign(-3),"\n",
    Math.min(num2,num),"\n",
    Math.sin(Math.PI/2)
)*/
// console.log(Math.floor(Math.random()*100) + 1)

const max = 45
const min = 25
const rangeNum = Math.floor(Math.random()*(max - min + 1))+min
console.log(rangeNum)
