// function helloguys () {
//     console.log("Hello HoangViet")
// }
// helloguys()

// function helloguysA (name){
//     console.log("Hello", name)
// }
// helloguysA ("Ho Hung")

// const helloGuy = () => {
//     console.log("Hello Hoang Viet")
// }
// helloGuy()



// const calc = (arrayNumber) => {
//     let number = arrayNumber.split(',')
//     let sum = 0
//     for(let i = 0; i<number.length; i++){
//         sum += Number(number[i])
// }
//     return sum
// }
// let userInput = prompt("Enter the number and seperate by comas")
// let ketqua = calc(userInput)

// let resultDisplay = document.getElementById('sum')

// resultDisplay.innerText += ketqua

while (true){
let a = Math.floor(Math.random()*20)

let b = Math.floor(Math.random()*20)

let op = ['*', '+', '-']
op[Math.floor(Math.random()*3)]
let pheptinh = op[Math.floor(Math.random()*3)]

let trueResult
    if (pheptinh == '+'){
        trueResult = a + b
    } else if (pheptinh == '-'){
        trueResult = a - b
    } else if (pheptinh == '*'){
        trueResult = a * b
    }

let wrong = Math.floor(Math.random()*6) - 3
let randomm = Math.floor(Math.random()*2)
if (randomm == 0){
    console.log(`${a} ${pheptinh} ${b} = ${trueResult} `)
    let userInput = prompt("T/F")
    if (userInput === 'T'){
        console.log("true")
    }else{
        console.log("false")
    }
} else if (randomm == 1){
    console.log(`${a} ${pheptinh} ${b} = ${trueResult + wrong}`)
    let userInput = prompt("T/F")
    if (userInput === 'F'){
        console.log("true")
    }else {
        console.log("false")
    }
}
}
