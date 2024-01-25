let formbox = document.querySelector('.form')
let burger = document.querySelector('.burger')
let burgerBtn = document.querySelector('.burger__btn')


let popup = () =>{
formbox.classList.toggle('active')
}

let toggleBurger = ()=>{
    burger.classList.toggle('active')
    burgerBtn.classList.toggle('active')
}
