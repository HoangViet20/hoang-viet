// // 1
// function helloWorld (){
//     console.log ("Hello World")
//     console.log ("Hello World")
//     console.log ("Hello World")
// }
// helloWorld()


// // 2
// function calc (a, b){
//     console.log(a + b)
// }
// calc (1, 2)


// // 3 + 4
// function drawSquare (a, b){
// for(let i = 0; i < 4; i++){
// color(b)
// fd(a)
// rt(90)
// }
// }
// for (let i = 0; i  < 30; i ++){
// drawSquare(i * 5, 'red')
// lt(17)
// penup()
// fd(i * 2)
// pendown()
// }


// //5
// function draw_star (length) {
//     rt(18)
//     for (let i = 0; i < 5; i++) {
//         fd(length)
//         rt(144)
//     }
// }
// draw_star(300)


// //6+7
// function remove_dollar_sign (s) {
//     for(let i=0; i < s.length; i++)
//     s = s.replace ('$','')
// return(s)
// }
// console.log(remove_dollar_sign('$$$$$hahahaha$$$$'))

// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//    console.log("Your function is correct")}
// else{
//    console.log("Oops, there's a bug")}


//8+9
function get_even_list (l){
    a = []
l.forEach(value => {
    if (value % 2 == 0){
        a.push(value)
    }
})
return(a)
}
get_even_list([1, 2, 3, 4, 5, 6])
console.log(a)

even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
   console.log("Your function is correct")
}else{
   console.log("Ooops, bugs detected")
}


