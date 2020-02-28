// //1
// console.log(Math.random())

// //2
// let array = [2, 5, 6, 9, 10]
// let randomItem = array[Math.floor(Math.random()*array.length)]
// console.log(randomItem)

// //3
console.clear()
let quiz = [
    {
        question: "1 + 1 = ?",
        answer: [1, 2, 3, 4],
        trueAnswer: 2
    },
    {
        question: "2 + 2 = ?",
       answer: [2, 4, 6, 8],
       trueAnswer: 4
    },
    {
        question: "3 + 3 = ?",
        answer: [5, 4, 6, 7],
        trueAnswer: 6
    }
]
let loop = true
while (loop){
let a = Math.floor(Math.random()*quiz.length)
console.log(quiz[a].question)
quiz[a].answer.forEach((value, index) => {
    console.log(`#${index+1}. ${value}`)
})
let userInput = Number(prompt("Choose the right answer"))
    if (userInput === quiz[a].trueAnswer){
        console.log("True")
    }else {
        console.log("False")
    }
quiz.splice(a, 1)
if (quiz.length == 0){
    loop = false
}
}
