// let h1 = document.getElementsByTagName('h1')
// console.log(h1)

let h1 = document.getElementById('hello')
console.log(h1)
console.dir(h1)
console.log(h1.innerText)

// h1.innerText = 'hello Binh'

//REMOVE
// h1.remove()

//CREATE
// let p = document.createElement('p')
// p.innerText = 'Anh em vui lam'

// h1.appendChild(p)
// console.log(p)

// console.dir(p)

// h1.innerHTML += '<p> Lop minh doan ket </p>'

let clickButton = document.getElementById('btn')

clickButton.addEventListener('click', () => {
    alert('I love you')
})
