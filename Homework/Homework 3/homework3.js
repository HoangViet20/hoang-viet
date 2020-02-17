// let a = 5
// let b = 6
// console.log(a, b)
// b = [a, a = b][0]
// console.log(a, b)


// let a = 5
// let b = 6
// [a, b] = [b, a];
// console.log(`${a} ${b}`);


// const s = 'Hello beauty there'
// const a = Array(s)
// let res = s.split(" ")
// console.log(res)


// const a = [4, 5, 7, -8];
// console.log(...a);


let shop = ['Jeans', 'T-shirt', 'Socks']

let loop = true
while(loop){
let userInput = prompt("Welcome to the shop admin panel, what do you want (C, R, U, D)?")
if (userInput === "R"){
    shop.forEach((value, index)=>
    {console.log(`${index} ${value}`)})
}else if (userInput === "C"){
    let add = prompt("Enter the new item")
    shop.push(add)
    alert("Done")
}else if (userInput === "U"){
    let edit = Number(prompt("Enter the position you want to update"))
    let newname = prompt("Enter the new name")
    shop[edit] = newname
    alert("Done")
}else if (userInput === "D"){
    let dellete = Number(prompt("Enter the position you want to delete"))
    shop.splice(dellete,1)
    alert("Done")
}else {
    console.log("This command is not supported")
    loop = false
}}