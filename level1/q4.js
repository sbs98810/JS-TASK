a=4
b=5
let c=(b>a)
console.log(c)          //true
let d=("apple" > "pineapple")       
console.log(d)          //false
let e=("2" > "12") 
console.log(e,typeof e)     //true
let f=(undefined == null)
console.log(f)              //true
let g=(undefined === null)
console.log(g)              //false
let h=(null == "\n0\n")
console.log(h)              //false
let i=(null === + "\n0\n")
console.log(i)              //false
