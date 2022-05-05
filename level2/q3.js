function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }}
    let ress=min(2,5)
    console.log(ress)
  
 
  function add(a,b="user"){
    console.log(a+b)//30
    return a+b}
    let res=add("hello","john")
/*
const  rating=(perf)=>{
    if(perf==="best"){
        return 5
    }
    else if(perf==="vgood"){
        return 4.5
    }
    else if(perf==="good"){
        return 4
    }
    else{
        return 3
    }
}
function hike(rating,basic_salary){
    if(rating===5){
        return basic_salary+(basic_salary*5/10)
    }
    else if(rating===4.5){
        return basic_salary+(basic_salary*5/100)
    }
    else if(rating===4){
        return basic_salary+(basic_salary*3/100)
    }
    else{
        return basic_salary+(basic_salary*2/100)
    }
}
let basic_salary=30000
let performance="good"
let star=rating(performance)
let new_salary=hike(star,basic_salary)
console.log(new_salary)*/