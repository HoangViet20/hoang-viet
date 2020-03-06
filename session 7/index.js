let context = {}
async function getData () {
    let api = await fetch ("https://reqres.in/api/users?page=2&fbclid=IwAR21ZmduljJ62pHPsTTRUHvjk7gkY-rdKauRYAMbI-HGNmdsOw03z2xjoJ4")
    let dataJson = await api.json()
    console.log (dataJson)
    let data = dataJson.data
    context.data = data
    // console.log(data)
}
// async function viewData () {
//     await getData()
//     let container = document.getElementById("container")
//     // console.log(context)
//     console.log(context.data)

//     let name = document.getElementById("name")
//     let getEmail = document.getElementById("email")

//     for (let a = 0; a < context.data.length; a++){
//     name.innerHTML += `<li> ${context.data[a].first_name} ${context.data[a].last_name} </li>
//     <img src="${context.data[a].avatar}">`
//         name.addEventListener("mouseover", () => {
//         email.innerHTML += `<li> ${context.data[a].email} </li>`
//     })
//     }

// }

async function viewData () {
    let container = document.getElementById("container")
    await getData()
    for(let i = 0; i < context.data.length; i++){
        let html = `
        <div id = "user-${i}">
            <p> ${context.data[i].first_name} ${context.data[i].last_name}</p>
            <img src = "${context.data[i].avatar}">
            <p class="un-view"> ${context.data[i].email} </p>
        </div>
        `
        container.innerHTML += html
    
    }
    for(let i = 0; i < context.data.length; i++){
        let user = document.getElementById(`user-${i}`)
        user.addEventListener('mouseover', () =>{
            user.children[2].classList.toggle('view')
        })
    }
}

viewData()
