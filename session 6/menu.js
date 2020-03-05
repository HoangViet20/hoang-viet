let ul = document.getElementById('menu')

// let userInput = prompt("Nhap mon")
// let newDish = document.createElement('li')
// newDish.innerText = userInput

// ul.appendChild(newDish)
let deleteDish = document.getElementById('delete')
let nameDish = document.getElementById('name')
let addDish = document.getElementById('create')
addDish.addEventListener('click', () =>{
    ul.innerHTML += `<li> ${nameDish.value} </li>`
})

deleteDish.addEventListener('click', () => {
    console.log(nameDish)
   if (nameDish.value === '') {
    ul.removeChild(ul.lastElementChild)
   } else {
    for (let i = 0; i < ul.children.length; i++){
        if (nameDish.value.toLowerCase()== ul.children[i].innerText.toLowerCase()){
            ul.children[i].remove()
        }
    }
 //    ul.remove(nameDish.value)
       
   }
})