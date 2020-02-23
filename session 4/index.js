//ICRUD

//Initial
// let person = {
//     name: 'Hoang Viet',
//     age: 20,
//     job: 'student',
//     location: 'hanoi',
//     status: 'single',
//     ex: 3,
// }

// console.log(person)

// //Read

// console.log(person.name)

// //Update

// person.status = 'in relationship with Code'

// console.log(person)

// // Create

// person.hobby = 'Playboy'

// console.log(person)

// //Delete

// delete person.ex
// console.log(person)

let dict ={
    good: 'tốt',
    bad: 'xấu',
    male: 'nam',
}

let a = (Object.keys(dict))

a.forEach((value, index)=>{
    console.log(`${index+1}. ${value}`)
})
loop = true
while (loop){
    let userInput = prompt("Tra tu")
    if (a.includes(userInput)){
        console.log(dict[userInput])
    }else if(userInput === 'E'){
        loop = false
    }else{
        let b = prompt("New word? (Y/N)").toUpperCase()
        if(b === "Y"){
            dict[userInput] = prompt("Meaning?")
            a = (Object.keys(dict))
            a.forEach((value, index)=>{
            console.log(`${index+1}. ${value}`)
    })
        }else if(b=== "N"){
            alert('Thank you')
        }else{
            alert('Wrong syntax')
        }
    }}



// let Table = [
//     {
//         Name: 'Viet', 
//         Days: '30', 
//         Hours: '8',
//         Price: '50000',
//     }, 
//     {
//         Name: 'Hung', 
//         Days: '30',
//         Hours: '6',
//         Price: '50000',
//     },
//     {
//         Name: 'Thinh',
//         Days: '25',
//         Hours: '12',
//         Price: '30000',
//     },
//     {
//         Name: 'Binh',
//         Days: '20',
//         Hours: '5',
//         Price: '100000',
//     }
// ]
// sum = 0
// Table.forEach(value => {
//     console.log(`${value.Name} luong thang: ${value.Days*value.Hours*value.Price}`)
//     sum += value.Days*value.Hours*value.Price
// }) 
// console.log(sum)


