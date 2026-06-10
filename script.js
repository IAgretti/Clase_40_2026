// const titulo = document.querySelector("#titulo")
// titulo.textContent = "JavaScript"

const mensaje = document.querySelector(".mensaje")
mensaje.textContent = "Texto modificado"
mensaje.style.color = "green"

const h2 = document.querySelector("h2")
h2.style.color = "blue";

const parrafos = document.querySelectorAll("p")
parrafos.forEach(parrafo => {
    parrafo.style.color = "brown"
})

// const botones = document.querySelectorAll("button")
// botones.forEach(boton => {
//     boton.addEventListener("click", () => {
//         boton.textContent = "Presionado";
//     })
// })

const colores = document.querySelectorAll("button")
colores.forEach(color => {
    color.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "lightgreen";
        color.textContent = "Verde"
    })
})

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#titulo").textContent = "Página completamente cargada";
})

window.addEventListener("resize", () => {
    document.querySelector("#ancho").textContent = window.innerWidth + " px";
    const ancho = window.innerWidth;
    if (ancho < 768) {
        document.querySelector("#ancho").textContent = "Modo móvil";
    } else {
        document.querySelector("#ancho").textContent = "Modo escritorio";
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        document.body.style.backgroundColor = "lightyellow"
    }
})

// Cambiar color de las 3 cajas al hacer clic
const cajas = document.querySelectorAll(".caja")
// cajas.forEach(caja => {
//     caja.addEventListener("click", () => {
//         caja.style.backgroundColor = "blueviolet"
//     })
// })

cajas[2].addEventListener("click", () => {
    cajas[2].style.backgroundColor = "orange"
})


