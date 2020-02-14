// let x = Math.floor(Math.random() * 40)


// if (x < 10){
//     console.log(x, "Lạnh vcl")
// } else if (x < 20){
//     console.log(x, "Hơi lạnh")
// } else if (x < 25){
//     console.log(x, "Cool")
// }else if (x < 30){
//     console.log(x, "Warm")
// }else{
//     console.log(x, "Hot")
// }

// let x = Math.floor(Math.random() * 100)

// let loop = true
// while (loop) {
// let y = Number(prompt("Doan so"))

//   if (y > x){
//     console.log("Too big")
// } else if (y < x){
//     console.log("Too small")
  
// } else if (y===x){
//     console.log("Bingo")
//     loop = false
// }
// }


// let x = Number(prompt("Nhap so"))
//  for (let y = 2; y < x; y++){
     
//  if (x%y === 0){
//     console.log("Day la ko phai nguyen to")
//     break
// } else{
//     console.log("Day la so nguyen to")
// }
// }

let userInput = Number(prompt("Enter your number"))
let isPrime = true
if (userInput < 2) {
    isPrime = false
}

for ( let i = 2; i < userInput; i++) {
    if (userInput % i == 0){
        isPrime = false
        break
    }
}

if (isPrime){
    console.log(`${userInput} is prime`)
} else {
    console.log(`${userInput} isn't prime`)
}


 