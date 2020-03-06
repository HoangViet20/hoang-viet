let body = document.getElementById("body")
let link = document.getElementById("demo-a")
let clickk = document.getElementById("btn-demo")
let userInput = document.getElementById("demo-input")
let list = document.getElementById("choose")
let deletee = document.getElementById("delete")

//1
clickk.addEventListener('click', () =>{
    userInput.value = link.href
})

deletee.addEventListener('click', () => {
    list.remove(list.selectedIndex)
})

let context = {}
async function getData () {
    let api = await fetch ("http://dummy.restapiexample.com/api/v1/employees")
    let dataJson = await api.json()
    console.log (dataJson)
    let data = dataJson.data
    context.data = data
    console.log(data)
}
async function viewData () {
    await getData()
    let nameData = document.getElementById("employee_salary")
    for (let a =0; a < context.data.length; a++){
        let html = `
        <div id = "user-${a}">
            <li> ${context.data[a].employee_name}</li>
            <p class="un-view"> ${context.data[a].employee_salary} </p>
        </div>
        `     
            nameData.innerHTML += html
        }
        for (let a =0; a < context.data.length; a++){
            let salary = document.getElementById(`user-${a}`)
            salary.addEventListener('mouseover', () => {
                salary.children[1].classList.toggle('view')
            })
        }
    }

viewData()
