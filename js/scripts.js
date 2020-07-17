
let cerrar = document.getElementById('cerrar')
let menu = document.getElementById('nav')
cerrar.addEventListener('click' , e => {
    // menu.remove()
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        // menu.style.transform="translate(0,0);"
        menu.style.display = "none";
    }
})
