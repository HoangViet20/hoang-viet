// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
//     };
//     for (let x in product) {
//     console.log(x)
//     }
    
//     // x receives from property product

//     for (let [key, value] of Object.entries(product)){
//         console.log(`${key}: ${value}`);
//       }


// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };

//     var {createdBy, expectedHours, ...others} = task
//     console.log(others);


// let dict = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’ pm The short version of Project Manager, the person in charge of the final result of a project',
//     uiOrux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
// }

// alert ('Hi there, this is dex dictionary')

// let loop = true
// while (loop){    
//     let userInput = prompt("Enter a keyword")
//     if (Object.keys(dict).includes(userInput)){
//         alert(dict[userInput])
//     }else{
//         dict[userInput] = prompt(`We could not fine your word: ${userInput}, leave your explanation`)
//         alert ('Done')
// }
// }


let shop = [
    {
        Name: 'Xiaomi portable charger 20000mah',
        Brand: 'Xiaomi',
        Price: 428 ,
        Color: 'White ',
        Category: 'Charger',
    },
    {
        Name: 'VSmart Active 1',
        Brand: 'VSmart',
        Price: 5487,
        Color: 'Black',
        Category: 'Phone',
    },
    {
        Name: 'IPhone X',
        Brand: 'Apple ',
        Price: 21490,
        Color: 'Gray',
        Category: 'Phone',
    },
    {
        Name: 'Samsung Galaxy A9',
        Brand: 'Samsung',
        Price: 8490,
        Color: 'Blue',
        Category: 'Phone',
    }
]

shop.forEach((value, index) => {
        console.log(`#${index+1} Name: ${value.Name}`)
        console.log(`Price: ${value.Price}`)
        console.log("----------------------")
})

let a = Number(prompt("Enter the product position"))
    console.clear()
    for (let [key, value] of Object.entries(shop[a-1])){
            console.log(`${key}: ${value}`);
          }

let b = prompt("Enter the category:")
// if (b === "Charger"){
//     console.clear()
//     console.log(`Name: ${shop[0].Name} \n Price: ${shop[0].Price}`)
// }else if (b=== "Phone"){
//     console.clear()
//     console.log(`Name: ${shop[1].Name} \n Price: ${shop[1].Price}`)
//     console.log(`Name: ${shop[2].Name} \n Price: ${shop[3].Price}`)
//     console.log(`Name: ${shop[2].Name} \n Price: ${shop[3].Price}`)
// }

product.forEach((value, index)=>{
    if(b == value.Category){
        console.log(`${value.Name}`)
    }
})

