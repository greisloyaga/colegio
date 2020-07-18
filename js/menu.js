
let hamburguer = document.getElementById('hamburguer')
let menu = document.getElementById('nav')
hamburguer.addEventListener('click' , e => {
    menu.classList.toggle('spread')
})


window.addEventListener('click', e => {
    if(menu.classList.contains('spread')
    && e.target !=menu && e.target !=hamburguer ) {
        menu.classList.toggle("spread")
    }
})