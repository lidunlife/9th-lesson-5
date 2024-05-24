let id = document.getElementById(`id`)
let password = document.getElementById(`password`)
let btn = document.getElementById(`btn`)

let i = 123456
let p = 7890

btn.addEventListener(`click`,() => {
    if (id.value == i && password.value == p) {
        alert(`Id and Password are right`)
}else{
    alert(`Id or Password aren't right`)
}
})