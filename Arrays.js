nums = [1,2,3,42,54,6,7,8,9]
nums.push(100)
console.log(nums)
nums.pop()
console.log(nums) 
nums.unshift(20) // -> insert at index0
console.log(nums)
console.log(nums.includes(200))
console.log(nums.indexOf(30))
console.log(typeof(nums.join()))
// what is difference between slice() and splice() 