

// let i = 5;

// if(i <= 5 && i > 0){
//     console.log("Baby")
// } else if ( i < 10){
//     console.log("Nhi dong")
// } else if ( i < 18){
//     console.log("Teen")
// } else if ( i < 35){
//     console.log("Thanh nien")
// } else {
//     console.log("Trung nien")
// }

// let name = "Viet"
// if(name === 'Tung' || name === "Viet"){
//     console.log(name, "Dep trai")
// }


let i = 0

while(i<3){
    let x = prompt ("Nhap ID")
    let y = prompt ("Nhap Password")
    if(x === "c4e70" && y === "codethechange"){
        console.log("Welcome to the wonderland")
        break
}   else {
        console.log("Welcome to the hell")
        i++
    }
}


let i = 0
let loop = true
while(loop){
    let x = prompt ("Nhap ID")
    let y = prompt ("Nhap Password")
    if(x === "c4e70" && y === "codethechange"){
        console.log("Welcome to the wonderland")
        break
}   else {
        console.log("Welcome to the hell")
        i++
    if (i===3){
        console.log("Dang nhap du r ban oiiii")
        loop = false
    }
    }
}