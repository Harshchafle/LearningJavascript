const mydate = new Date()
console.log(mydate.getTime()) // ->milliseconds
console.log(mydate.toString())
console.log(mydate.getFullYear())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())

let day = new Date("03-26-2025")
console.log(day.toDateString())

// Timestamps
let time = Date.now()
console.log(time)
console.log(Math.floor(Date.now()/1000))

console.log(Date.getTime)
console.log(time.Date)