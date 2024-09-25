let imgsCarruselGDB = [
    "/img/HerramientasGDB.webp",
    "/img/fichaBovino.webp"
]
let imgsCarruselEcommerce = [
    "/img/HerramientasEcommerce.webp"
]
let imgsCarruselProyectosReact = [
    "/img/ProyectosReact.webp"
]
let imgsCarruselPortafolioWeb = [
    "/img/HerramientasPortafolioWeb.webp"
]

cargarCarrusel = (nameProject) => {

    let img = document.getElementById(`idImgCarrusel${nameProject}`)
    let atras = document.getElementById(`atras${nameProject}`)
    let adelante = document.getElementById(`adelante${nameProject}`)
    let actual = 0;

    let selectImgsCarrusel = []

    switch (nameProject) {
        case "GDB":
            selectImgsCarrusel = imgsCarruselGDB
            break;
        case "ECommerce":
            selectImgsCarrusel = imgsCarruselEcommerce
            break;
        case "ProyectosReact":
            selectImgsCarrusel = imgsCarruselProyectosReact
            break;
        case "PortafolioWeb":
            selectImgsCarrusel = imgsCarruselPortafolioWeb
            break;
        default:
            break;
    }

    if (atras != null) {
        atras.addEventListener('click', function () {
            actual -= 1

            if (actual == -1) {
                actual = selectImgsCarrusel.length - 1
            }

            img.innerHTML = `<img class="imgCarrusel" src="${selectImgsCarrusel[actual]}" alt="Imagen del Carrusel" loading="lazy">`
        })

        adelante.addEventListener('click', function () {
            actual += 1

            if (actual == selectImgsCarrusel.length) {
                actual = 0
            }

            img.innerHTML = `<img class="imgCarrusel" src="${selectImgsCarrusel[actual]}" alt="Imagen del Carrusel" loading="lazy">`
        })
    }
}